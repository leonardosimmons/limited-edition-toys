import axios from 'axios';

export const WordpressApi = axios.create({
  baseURL: ('https://' + process.env.WORDPRESS_API) as string,
});
