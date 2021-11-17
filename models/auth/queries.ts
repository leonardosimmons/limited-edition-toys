import axios, { AxiosResponse } from 'axios';
import { IronSession } from 'iron-session';
import { CartSessionToken } from 'models/cart/types';
import { ProductCartToken } from 'models/product/types';
import { UserSessionToken } from 'models/user/types';
import { useQuery } from 'react-query';
import { Default, Queries } from 'utils/keys';
import { RouteConfirmation } from 'utils/types';

//* -------------------------------------------------
// Sessions

export async function getCurrentSession(
  session: 'user' | 'cart',
): Promise<UserSessionToken | CartSessionToken[] | RouteConfirmation> {
  if (session === 'user') {
    return await axios
      .get('/api/user')
      .then((res: AxiosResponse<any>) => res.data)
      .catch((err) => console.log(err));
  }

  return await axios
    .get('/api/user/cart')
    .then((res: AxiosResponse<any>) => res.data)
    .catch((err) => console.log(err));
}

export function useSession() {
  return useQuery(Queries.AUTH_SESSION, () => {
    return getCurrentSession('user') as Promise<UserSessionToken>;
  });
}

export function useCartSession() {
  return useQuery(Queries.CART_SESSION, () => {
    return getCurrentSession('cart') as Promise<CartSessionToken[]>;
  });
}

//* -------------------------------------------------
// Login

export async function loginUser(
  username?: string,
  password?: string,
): Promise<IronSession | RouteConfirmation> {
  return await axios
    .post('/api/user/login', {
      username: username || Default.GUEST_LOGIN_USERNAME,
      password: password || Default.GUEST_LOGIN_PASSWORD,
    })
    .then((res: AxiosResponse<any>) => res.data)
    .catch((err) => console.log(err));
}

//* -------------------------------------------------
// Logout

export async function logoutUser(): Promise<RouteConfirmation> {
  return await axios
    .get('/api/user/logout')
    .then((res: AxiosResponse<any>) => res.data)
    .catch((err) => console.log(err));
}

//* -------------------------------------------------
// Update

export async function updateUserCart(cart: ProductCartToken[]) {
  const tokens: CartSessionToken[] = cart.map((item: ProductCartToken) => ({
    id: item.product.id,
    quantity: item.quantity,
  }));

  return await axios
    .post('/api/user/update', {
      cart: tokens,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
