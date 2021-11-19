export enum Color {
  PRIMARY = '#007aff',
  PRIMARY_RGB = '0, 122, 255',
  SECONDARY = '#f7da67',
  SECONDARY_DARK = '#ac9848',
  NAVBAR_BACKGROUND = '#bbdcff',
}

export enum Default {
  GUEST_LOGIN_USERNAME = 'let-guest',
  GUEST_LOGIN_PASSWORD = 'letpassword-2021',
  MAX_CART_CARD_QUANTITY_SELECTION = 20,
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
  BOTTOM_CLOUDS_LIGHT = '/images/bottom-clouds.png',
  CLOUD_BACKGROUND = '/svg/cloud-background.svg',
  EVENTS_BANNER = '/images/banners/events.png',
  RANDY_EMBERLIN = '/images/events/randyemberlin.jpg',
  MASCOT_ONE = '/images/mascot-1.png',
  MIDDLE_CLOUDS = '/images/middle.png',
  NAVBAR_PROMO = '/images/now-open.png',
  NEW_IEMS = '/images/banners/new-items.png',
  STOREFRONT = '/images/store/storefront.jpg',
  STORE_INTERIOR_1 = '/images/store/interior-1.jpg',
  STORE_INTERIOR_2 = '/images/store/interior-2.jpg',
  STORE_INTERIOR_3 = '/images/store/interior-3.jpg',
  STORE_INTERIOR_4 = '/images/store/interior-4.jpg',
  STORE_INTERIOR_5 = '/images/store/interior-5.jpg',
  TEST_HEADER = '/svg/test-header.svg',
  TOP_CLOUDS_LIGHT = '/svg/top-light.svg',
}

export enum Links {
  HOME = '/',
  SHOPPING_CART = '/cart',
  BILLING = '/checkout/billing',
  PAYMENT = '/api/payment/checkout',
}

export enum Queries {
  ALL_PRODUCTS = 'products',
  INVENTORY_BY_ID = 'inventory-by-id',
  PAGINATED_PRODUCTS = 'paginated-products',
  PRODUCT_CATEGORIES = 'product-categories',
  PRODUCT_TAGS = 'product-tags',
  PRODUCT_BY_ID = 'product-by-id',
  AUTH_LOGIN = 'user-auth-login',
  AUTH_LOGOUT = 'user-auth-logout',
  AUTH_SESSION = 'user-auth-session',
  CART_SESSION = 'user-cart-session',
}
