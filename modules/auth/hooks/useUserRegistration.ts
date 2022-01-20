import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { Links } from '../../../utils/keys';
import { UserRegistrationToken } from '../types';

import useValidation from 'lib/hooks/useValidation';

function useUserRegistration() {
  const router = useRouter();
  const validate = useValidation();
  const [isValid, setIsValid] = React.useState<boolean>(false);

  function toggleValidity() {
    setIsValid((state) => !state);
  }

  async function register(
    token: Partial<UserRegistrationToken>,
  ): Promise<any> {
    try {
      return await axios
        .post('/api/auth/registration', {
          firstname: token.firstname,
          lastname: token.lastname,
          username: token.username,
          password: token.password,
          email: token.email,
        })
        .then((res) => token);
    } catch (err) {
      alert('Something went wrong, unable to add register as a new user');
    }
  }

  const registerNewUser = useMutation(
    (token: Partial<UserRegistrationToken>) =>
      register(token),
    {
      onSuccess: async () => {
        await router.push(Links.SIGN_IN);
      },
    },
  );

  function verifyUserRegistration(reg: UserRegistrationToken): boolean {
    let fail: string = '';
    if (validate.pwCheck(reg.password, reg.checkPw)) {
      fail = fail + validate.username(reg.username);
      fail = fail + validate.email(reg.email);

      if (fail) {
        alert(fail);
        return false;
      } else {
        setIsValid(true);
        return true;
      }
    } else {
      alert('Passwords do no match!');
      return false;
    }
  }

  return {
    register: {
      user: registerNewUser.mutate,
    },
    toggleValidity,
    verify: verifyUserRegistration,
    isValid,
  };
}

export { useUserRegistration };
