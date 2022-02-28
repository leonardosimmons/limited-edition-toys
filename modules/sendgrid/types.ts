export type EmailOrderItemToken = {
  name: string;
  price: string;
  quantity: string;
  total: string;
}

export type EmailDynamicData = {
  orderId: string;
  firstname: string;
  lastname: string;
  email: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  subtotal: string;
  shipping: string;
  total: string;
  contact: string;
  items: EmailOrderItemToken[];
}

export type EmailToken = {
  email: string;
  dynamicData: EmailDynamicData;
}