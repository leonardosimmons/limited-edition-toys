import sgMail from '@sendgrid/mail';
import { EmailToken } from './types';
import { RouteConfirmation } from '../../utils/types';

sgMail.setApiKey(process.env.EMAIL_API_KEY!);

class SendGridModel {

  public async sendMail(emailToken: EmailToken): Promise<RouteConfirmation> {
    if (this.validate(emailToken.email)) {
      try {
        // await sgMail.send({
        //   to: emailToken.email,
        //   from: process.env.EMAIL_SENDER!,
        //   subject: emailToken.subject,
        //   text: emailToken.message
        // });
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
