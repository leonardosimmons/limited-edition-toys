import { WooCommerceBase } from './mixins/base';
import { WooCommerceCustomerModel } from './mixins/customer';

export const WooCommerce = WooCommerceCustomerModel(WooCommerceBase);
export type WooCommerce = InstanceType<typeof WooCommerce>;