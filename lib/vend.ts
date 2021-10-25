import axios from 'axios';

export type VendResponse<T> = {
  data: T;
  version: {
    min: number;
    max: number;
  };
};

export const Vend = axios.create({
  baseURL: ('https://' + process.env.VEND_API) as string,
  headers: { Authorization: `Bearer ${process.env.VEND_API_KEY as string}` },
});
