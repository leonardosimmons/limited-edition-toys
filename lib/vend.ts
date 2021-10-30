import axios from 'axios';

export type VendVersion = {
  min: number;
  max: number;
};

export type VendResponse<T> = {
  data: T;
  version: VendVersion;
};

export const Vend = axios.create({
  baseURL: ('https://' + process.env.VEND_API) as string,
  headers: { Authorization: `Bearer ${process.env.VEND_API_KEY as string}` },
});
