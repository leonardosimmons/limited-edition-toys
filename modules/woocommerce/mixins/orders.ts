import { Constructor } from '../../../utils/types';
import { WooCommerceLineItem, WooCommerceOrderToken, WooCommerceProductVerification } from '../types';
import { Customer, Order, OrderLineItem } from 'square';
import { WooCommerceCustomer } from './customer';
import { WooCommerceBase } from './base';
import { WooCommerceApi } from '../../../lib';

export function WooCommerceOrderModel<TBase extends Constructor>(
  Base: TBase,
) {
  return class extends Base {
    private base = new WooCommerceBase();
    private wooCommerceCustomer = new WooCommerceCustomer();

    public createOrderToken(customer: Customer, order: Order, transId: string, tokens: WooCommerceProductVerification[], uid?: number): WooCommerceOrderToken {
      const lineItems = this.createOrderLineItemTokens(order.lineItems!, tokens);
      console.log("line", lineItems)
      return {
        currency: 'USD',
        customer_id: uid || 0,
        payment_method: 'bacs',
        payment_method_title: 'Direct Bank Transfer',
        set_paid: true,
        shipping_total: '10.00',
        transaction_id: transId,
        billing: this.wooCommerceCustomer.createCustomerBillingToken(customer),
        shipping: this.wooCommerceCustomer.createCustomerShippingToken(customer),
        line_items: this.createOrderLineItemTokens(order.lineItems!, tokens),
        total: this.base.convertPriceFromBigint(order.netAmounts?.totalMoney?.amount!),
        shipping_lines: [
          {
            method_id: 'flat_rate',
            method_title: 'Flat Rate',
            total: "10.00"
          }
        ]
      } as WooCommerceOrderToken
    }

    public createOrderLineItemTokens(items: OrderLineItem[], tokens: WooCommerceProductVerification[]): WooCommerceLineItem[] {
      let buffer: WooCommerceLineItem[] = [];
      items.forEach((item) => {
        tokens.forEach((token) => {
          if (token.sku === item.note) {
            buffer.push(this.createLineItemToken(item, token));
          }
        })
      });
      return buffer;
    }

    private createLineItemToken(item: OrderLineItem, token: WooCommerceProductVerification): WooCommerceLineItem {
      return {
        product_id: token.id,
        quantity: parseInt(item.quantity!),
      }
    }
  };
}
