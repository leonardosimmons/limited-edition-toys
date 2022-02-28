import sgMail from '@sendgrid/mail';
import { EmailOrderItemToken, EmailToken } from './types';
import { RouteConfirmation } from '../../utils/types';
import { Customer } from 'square';
import { ProductCheckoutToken } from '../product/types';
import { EMAIL_SENDER, EMAIL_TEMPLATE_ID } from '../../lib/constants';

sgMail.setApiKey(process.env.EMAIL_API_KEY!);

class SendGridModel {
  public createEmailToken(orderId: string, customer: Customer, items: ProductCheckoutToken[]): EmailToken {
    let subtotal = 0;
    const itemTokens: EmailOrderItemToken[] = [];

    items.forEach((item) => {
      subtotal = subtotal + parseFloat(item.price);
      itemTokens.push({
        name: item.name,
        price: item.price.toString().concat("0"),
        quantity: item.quantity.toString(),
        total: (parseFloat(item.price) * item.quantity).toString().concat("0")
      } as EmailOrderItemToken);
    });

    return {
      email: customer.emailAddress!,
      dynamicData: {
        orderId: orderId,
        firstname: customer.givenName!,
        lastname: customer.familyName!,
        email: customer.emailAddress!,
        addressLineOne: customer.address!.addressLine1!,
        addressLineTwo: customer.address?.addressLine2!,
        city: customer.address!.locality!,
        state: customer.address!.administrativeDistrictLevel1!.toUpperCase(),
        postalCode: customer.address!.postalCode!,
        country: customer.address!.country!,
        shipping: "10.00",
        subtotal: subtotal.toString(),
        total: (subtotal + 10.00).toString(),
        //total: (Number(orderResponse.order!.netAmounts?.totalMoney!.amount as unknown) / 100).toString().concat("0"),
        contact: EMAIL_SENDER,
        items: itemTokens
      }
    } as EmailToken
  }

  public async sendMail(emailToken: EmailToken): Promise<RouteConfirmation> {
    if (this.validate(emailToken.email)) {
      try {
        await sgMail.send({
          to: emailToken.email,
          from: EMAIL_SENDER,
          dynamicTemplateData: emailToken.dynamicData,
          templateId: EMAIL_TEMPLATE_ID
        });
        return { ok: true }
      }
      catch(err: any) {
        return { error: true, message: err.response.body.errors }
      }
    }

    return { error: true, message: 'Error parsing email'}
  }

  public validate(email: string): boolean {
    const reMail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!email.match(reMail)) {
      return false;
    }
    return true;
  }
}

export { SendGridModel }
