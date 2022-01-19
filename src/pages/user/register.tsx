import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { UserRegistrationToken } from 'modules/auth/types';
import data from '../../../data/pages/signIn.json';
import { Links } from 'utils/keys';

import { useLogin } from 'modules/auth/hooks/useLogin';
import { useUserRegistration } from 'modules/auth/hooks/useUserRegistration';

import {
  SignInHeader,
  SignInInputButtonBox,
  SignInInputFormControl,
  SignInMainContainer,
} from 'src/containers/pages/styles/SignInPage';

import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Layout from 'src/containers/Layout/Layout';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { RouteConfirmation } from '../../../utils/types';
import { CircularProgress } from '@mui/material';

function Registration({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  //* -------------------------------------------------
  // Properties
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState<boolean>();
  const [showCheckPw, setCheckPw] = React.useState<boolean>();
  const [token, setToken] = React.useState<UserRegistrationToken>({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    checkPw: '',
  });

  //* -------------------------------------------------
  // Registration
  const login = useLogin();
  const registration = useUserRegistration();
  const [registered, setRegistered] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (registration.isValid) {
      registration.toggleValidity();
    }
  }, []);

  React.useEffect(() => {
    let reset: any;
    if(registered) {
      reset = setTimeout(() => {
        setRegistered(false)
      }, 20 * 1000);
    }

    return () => {
      clearInterval(reset);
    }
  }, [registered])

  async function handleRegisterUser(): Promise<void> {
    registration.verify(token);
    if (registration.isValid) {
      try {
        setRegistered(true);
        const response: RouteConfirmation = await registration.register.user(
          token,
        );
        if (response.ok) {
          const result: RouteConfirmation = await login.user({
            username: token.username,
            password: token.password,
          });
          if (result.ok) {
            await login.signOut().then(() => {
              login
                .user({
                  username: token.username,
                  password: token.password,
                })
                .then((res: RouteConfirmation) => {
                  if (res.ok) {
                    login.update('signed-in');
                    router.push(Links.ACCOUNT);
                  }
                });
            });
          } else {
            alert('Something went wrong');
            // TODO handle login error UI & api
          }
        }
      } catch (err) {
        return;
      }
    }
  }

  //* -------------------------------------------------
  // Handlers
  function handleBackToSignIn(): void {
    router.push('/user/sign-in');
  }

  function handleInputChange(key: keyof UserRegistrationToken) {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      setToken({ ...token, [key]: e.target.value });
    };
  }

  function handlePasswordVisibility(type: keyof UserRegistrationToken): void {
    switch (type) {
      case 'checkPw':
        setCheckPw((state) => !state);
        break;
      case 'password':
        setShowPassword((state) => !state);
        break;
      default:
        return;
    }
  }

  function handlePasswordMouseDown(
    e: React.MouseEvent<HTMLButtonElement>,
  ): void {
    e.preventDefault();
  }

    return (
      <Layout title={'Limited Edition Toys | Sign In'}>
        <SignInMainContainer>
          <SignInHeader>
            <Typography variant="caption">{data.register.caption}</Typography>
            <Typography variant="h1">{data.register.title}</Typography>
          </SignInHeader>
          {data.register.inputs.map((input, index) => (
            <SignInInputFormControl key={index}>
              <InputLabel htmlFor={`register-input-${index}`}>
                {input.label}
              </InputLabel>
              <OutlinedInput
                id={`register-input-${index}`}
                type={
                  input.propName === 'password' && showPassword
                    ? 'text'
                    : input.propName === 'password'
                    ? 'password'
                    : input.propName === 'checkPw' && showCheckPw
                    ? 'text'
                    : input.propName === 'checkPw'
                    ? 'password'
                    : 'text'
                }
                size="small"
                label={input.label}
                value={
                  token![
                    input.propName as keyof UserRegistrationToken
                  ] as string
                }
                onChange={handleInputChange(
                  input.propName as keyof UserRegistrationToken,
                )}
                endAdornment={
                  input.propName === 'password' ? (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          handlePasswordVisibility(
                            input.propName as keyof UserRegistrationToken,
                          )
                        }
                        onMouseDown={handlePasswordMouseDown}>
                        {showPassword ? (
                          <Visibility sx={{ transform: 'scale(.8)' }} />
                        ) : (
                          <VisibilityOff sx={{ transform: 'scale(.8)' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : input.propName === 'checkPw' ? (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          handlePasswordVisibility(
                            input.propName as keyof UserRegistrationToken,
                          )
                        }
                        onMouseDown={handlePasswordMouseDown}>
                        {showCheckPw ? (
                          <Visibility sx={{ transform: 'scale(.8)' }} />
                        ) : (
                          <VisibilityOff sx={{ transform: 'scale(.8)' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : (
                    ''
                  )
                }
              />
            </SignInInputFormControl>
          ))}
          {registered ? (
            <SignInInputButtonBox>
              <CircularProgress />
            </SignInInputButtonBox>
          ) : (
            <SignInInputButtonBox>
              <Button variant="contained" onClick={handleRegisterUser}>
                Create Account
              </Button>
              <div>
                <Button onClick={handleBackToSignIn}>Back to Sign in</Button>
              </div>
            </SignInInputButtonBox>
          )}
        </SignInMainContainer>
      </Layout>
    );
}

export default Registration;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
