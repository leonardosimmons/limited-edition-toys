export class WooCommerceBase {
  public error() {
    console.log('WooCommerce Error');
  }

  public convertPriceFromBigint(value: bigint): string {
    const price = Number(value).toString()
    const buffer = price.split('');
    for(let i = 0; i < 2; ++i) {
      buffer.pop();
    }
    return buffer.join('') + '.00';
  }
}