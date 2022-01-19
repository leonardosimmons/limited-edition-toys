export enum Color {
  PRIMARY = '#007aff',
  PRIMARY_RGB = '0, 122, 255',
  SECONDARY = '#f7da67',
  SECONDARY_DARK = '#ac9848',
  NAVBAR_BACKGROUND = '#bbdcff',
}

export enum Default {
  MAX_PRODUCT_NAME_LENGTH = 25,
  MAX_PRODUCTS_PER_QUERY = 1000,
  PRODUCTS_PER_PAGE = 30,
}

export enum Key {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
  SESSION_COOKIES = 'letpdx-session',
}

export enum Id {
  NAVBAR_SEARCH_MENU = 'navbar-search-menu',
  CATEGORY_SEARCH_BAR = 'category-search-bar',
}

export enum Images {
  ABOUT_US_BANNER = '/images/banners/about-us.png',
  BOTTOM_CLOUDS_LIGHT = '/images/bottom-light.png',
  MASCOT_ONE = '/images/mascot-1.png',
  MIDDLE_CLOUDS = '/images/middle.png',
  NAVBAR_PROMO = '/images/now-open.png',
  NEW_IEMS = '/images/banners/new-items.png',
  TEST_HEADER = '/svg/test-header.svg',
  TOP_CLOUDS_LIGHT = '/svg/top-light.svg',
}

export enum Links {
  ACCOUNT = '/user/account',
  HOME = '/',
  SHOPPING_CART = '/cart',
  BILLING = '/checkout/billing',
  SIGN_IN = '/user/sign-in',
  USER = '/user',
}

export enum Queries {
  ALL_PRODUCTS = 'products',
  INVENTORY_BY_ID = 'inventory-by-id',
  PAGINATED_PRODUCTS = 'paginated-products',
  PRODUCT_PROMOTIONS = 'product-promotions',
  PRODUCT_TAGS = 'product-tags',
  VEND_CUSTOMER = 'vend-customer',
  VEND_CUSTOMERS = 'vend-customers',
  USER = 'user',
  WOOCOMMERCE_CUSTOMERS = 'woocommerce-customers',
  WORDPRESS_USER = 'wordpress-user',
  USER_SESSION = 'user-auth-session',
}

export enum Timer {
  DASHBOARD_INPUT_RESET = 5 * 1000,
}
