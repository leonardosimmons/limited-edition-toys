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

export type Dashboard = {
  account: AccountInformation;
  password: Password;
}