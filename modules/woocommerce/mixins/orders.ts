import { Constructor } from '../../../utils/types';
import { WooCommerceLineItem, WooCommerceOrderToken } from '../types';
import { Customer, Order, OrderLineItem } from 'square';
import { WooCommerceCustomer } from './customer';
import { WooCommerceBase } from './base';

export function WooCommerceOrderModel<TBase extends Constructor>(
  Base: TBase,
) {
  return class extends Base {
    private base = new WooCommerceBase();
    private wooCommerceCustomer = new WooCommerceCustomer();

    public async createNewOrder(customer: Customer, order: Order, transId: string, uid?: number) {
      const token = this.createOrderToken(customer, order, transId, uid);
      //return await WooCommerceApi.post('orders', token);
      return token;
    }

    public createOrderToken(customer: Customer, order: Order, transId: string, uid?: number): WooCommerceOrderToken {
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
        lineItems: this.createOrderLineItemTokens(order.lineItems!),
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

    public createOrderLineItemTokens(items: OrderLineItem[]): WooCommerceLineItem[] {
      let buffer: WooCommerceLineItem[] = [];
      items.forEach((item) => {
        buffer.push(this.createLineItemToken(item));
      });
      return buffer;
    }

    private createLineItemToken(item: OrderLineItem): WooCommerceLineItem {
      return {
        sku: item.note!,
        quantity: parseInt(item.quantity!),
        price: this.base.convertPriceFromBigint(item.basePriceMoney?.amount!),
        subTotal: this.base.convertPriceFromBigint(item.grossSalesMoney?.amount!),
        total: this.base.convertPriceFromBigint(item.totalMoney?.amount!)
      }
    }
  };
}
