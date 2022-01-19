import { VendBase } from './mixins/base';
import { VendCustomerModel } from './mixins/customers';

export const Vend = VendCustomerModel(VendBase);
export type Vend = InstanceType<typeof Vend>;