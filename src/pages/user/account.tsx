import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { withSessionSsr } from 'lib/session';

import { useUser } from '../../../modules/user/hooks/useUser';

import { DashBoard } from 'src/features/dashboard/styles/Dashboard';

import Typography from '@mui/material/Typography';

import Layout from 'src/containers/Layout/Layout';
import {
  AccountHeader,
  AccountMainContainer,
} from 'src/containers/pages/styles/AccountPage';

function UserAccountPage({ }:
InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const user = useUser();

  return (
    <Layout title={'Limited Edition Toys | My Account'}>
      <AccountMainContainer>
        <AccountHeader>
          <Typography variant="h1">My Account</Typography>
        </AccountHeader>
        <DashBoard />
      </AccountMainContainer>
    </Layout>
  );
}

export default UserAccountPage;

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session && !req.session.auth) {
      return {
        redirect: {
          destination: '/user/sign-in',
          permanent: false
        }
      }
    }
    return {
      props: { },
    };
  }
);
