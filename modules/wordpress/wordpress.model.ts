import { WordpressBase } from './mixins/base';
import { WordpressLoginModel } from './mixins/login';

export const WordpressModel = WordpressLoginModel(WordpressBase);
export type Wordpress = InstanceType<typeof WordpressModel>;