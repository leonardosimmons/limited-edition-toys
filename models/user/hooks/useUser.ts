import React from 'react';
import { UserLoginCredentials, UserOptions, UserSessionToken } from '../types';
import { useMutation, useQueryClient } from 'react-query';
import { RouteConfirmation } from 'utils/types';
import {
  loginUser,
  logoutUser,
  updateUserCart,
  useCartSession,
  useSession,
} from 'models/auth/queries';
import { ProductCartToken } from 'models/product/types';
import { CartSessionToken } from 'models/cart/types';
import { Queries } from 'utils/keys';
import { IronSession } from 'iron-session';

function useUser(options?: UserOptions) {
  const queryClient = useQueryClient();
  const { status: sessionStatus, data: session } = useSession();
  const { status: cartStatus, data: cart } = useCartSession();

  //* -------------------------------------------------
  // Mutations

  const login = useMutation(
    (creds?: UserLoginCredentials) =>
      loginUser(creds?.username, creds?.password),
    {
      onSuccess: (data: IronSession | RouteConfirmation) => {
        if ((data as IronSession).user && (data as IronSession).cart) {
          queryClient.setQueryData(
            Queries.AUTH_SESSION,
            (data as IronSession).user,
          );
          queryClient.setQueryData(
            Queries.CART_SESSION,
            (data as IronSession).cart,
          );
        }
      },
    },
  );

  const updateCart = useMutation(
    (cart: ProductCartToken[]) => updateUserCart(cart),
    {
      onSuccess: (data) => {
        if (data) queryClient.setQueryData(Queries.CART_SESSION, data.cart);
      },
    },
  );

  //* -------------------------------------------------
  // Actions

  async function logout(): Promise<RouteConfirmation> {
    return await logoutUser();
  }

  return {
    login: login.mutate,
    logout,
    session: {
      status: sessionStatus,
      current: session,
      cart: {
        status: cartStatus,
        current: cart,
      },
    },
    status: login.status,
    update: {
      cart: updateCart.mutate,
      cartStatus: updateCart.status,
    },
  };
}

export { useUser };
