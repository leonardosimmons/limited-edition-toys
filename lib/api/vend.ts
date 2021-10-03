import axios from "axios";

export const vend = axios.create({
  baseURL: process.env.VEND_API as string,
  headers: { Authorization: `Bearer ${process.env.VEND_API_KEY as string}` },
});
