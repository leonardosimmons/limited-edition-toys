import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import data from '../../../data/pages/signIn.json';
import { UserSignInToken } from 'modules/auth/types';

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
import { useRouter } from 'next/router';

function SignInPage({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  //* -------------------------------------------------
  // Properties
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState<boolean>();
  const [token, setToken] = React.useState<UserSignInToken>({
    email: '',
    password: '',
  });

  //* -------------------------------------------------
  // Handlers
  function handleCreateAccount() {
    router.push('/user/register')
  }

  function handleInputChange(key: keyof UserSignInToken) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setToken({ ...token, [key]: e.target.value });
    };
  }

  function handlePasswordVisibility(): void {
    setShowPassword((state) => !state);
  }

  function handlePasswordMouseDown(
    e: React.MouseEvent<HTMLButtonElement>,
  ): void {
    e.preventDefault();
  }

  function handleSignInClicked(): void {
    // check user credientials
    // OK  => redirect to account page (home temp)
    // Err => display error via alert
    console.log('Sign in clicked');
  }

  return (
    <Layout title={'Limited Edition Toys | Sign In'}>
      <SignInMainContainer>
        <SignInHeader>
          <Typography variant="caption">{data.heading.caption}</Typography>
          <Typography variant="h1">{data.heading.title}</Typography>
        </SignInHeader>
        {data.inputs.map((input, index) => (
          <SignInInputFormControl key={index}>
            <InputLabel>{input.label}</InputLabel>
            <OutlinedInput
              id={`signin-input-${input.label}`}
              type={
                input.propName === 'password' && showPassword
                  ? 'text'
                  : input.propName === 'password'
                  ? 'password'
                  : 'text'
              }
              size="small"
              label={input.label}
              value={token![input.propName as keyof UserSignInToken] as string}
              onChange={handleInputChange(
                input.propName as keyof UserSignInToken,
              )}
              endAdornment={
                input.propName === 'password' && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handlePasswordVisibility}
                      onMouseDown={handlePasswordMouseDown}>
                      {showPassword ? (
                        <Visibility sx={{ transform: 'scale(.8)' }} />
                      ) : (
                        <VisibilityOff sx={{ transform: 'scale(.8)' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          </SignInInputFormControl>
        ))}
        <SignInInputButtonBox>
          <Button variant="contained" onClick={handleSignInClicked}>
            Sign In
          </Button>
          <div>
            <Button onClick={handleCreateAccount}>Create Account</Button>
          </div>
        </SignInInputButtonBox>
      </SignInMainContainer>
    </Layout>
  );
}

export default SignInPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
