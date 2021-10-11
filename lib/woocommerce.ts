import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const WooCommerce = new WooCommerceRestApi({
  url: ('https://' + process.env.WOOCOMMERCE_API) as string,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY as string,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET as string,
  version: 'wc/v3',
});
