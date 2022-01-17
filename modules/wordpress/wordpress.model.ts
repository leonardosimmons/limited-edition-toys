import { WordpressBase } from './mixins/base';
import { WordpressLoginModel } from './mixins/login';
import { WordpressUserModel } from './mixins/user';

export const Wordpress = WordpressUserModel(WordpressLoginModel(WordpressBase));
export type Wordpress = InstanceType<typeof Wordpress>;