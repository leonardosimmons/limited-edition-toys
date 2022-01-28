import { WooCommerceBase } from './mixins/base';
import { WooCommerceCustomerModel } from './mixins/customer';
import { WooCommerceOrderModel } from './mixins/orders';

export const WooCommerce = WooCommerceOrderModel(WooCommerceCustomerModel(WooCommerceBase));
export type WooCommerce = InstanceType<typeof WooCommerce>;