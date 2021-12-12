import React from 'react';
import jwt from 'jsonwebtoken';
import { InferGetServerSidePropsType } from 'next';
import { CLIENT_JWT_SECRET } from 'lib/constants';
import { withSessionSsr } from 'lib/session';

import { PermissionLevel } from 'modules/auth/auth.config';

import Typography from '@mui/material/Typography';

import Layout from 'src/containers/Layout/Layout';
import {
  AccountHeader,
  AccountMainContainer,
} from 'src/containers/pages/styles/AccountPage';
import { DashBoard } from 'src/features/dashboard/styles/Dashboard';

function UserAccountPage({}: //user,
InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
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

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    // try {
    //   const decoded = jwt.verify(req.session.auth, CLIENT_JWT_SECRET);
    //   if ((decoded as any).data.permissionLevel >= PermissionLevel.USER) {
    //     return {
    //       props: {
    //         user: decoded,
    //       },
    //     };
    //   } else {
    //     return {
    //       redirect: {
    //         destination: '/user/sign-in',
    //         permanent: false,
    //       },
    //     };
    //   }
    // } catch (err) {
    //   return {
    //     redirect: {
    //       destination: '/user/sign-in',
    //       permanent: false,
    //     },
    //   };
    // }
    return {
      props: {},
    };
  },
);
