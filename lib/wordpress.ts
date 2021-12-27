import axios from 'axios';

export const Wordpress = axios.create({
  baseURL: ('https://' + process.env.WORDPRESS_API) as string,
});
