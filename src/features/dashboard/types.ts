export type AccountInformation = {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
}

export type Password = {
  current: string;
  new: string;
  confirm: string;
}

export type ShippingInformation = {
  addressOne: string | null;
  apt: string | null;
  city: string | null;
  state: string | null;
  postcode: string | null;
}

export type Dashboard = {
  account: AccountInformation;
  password: Password;
}