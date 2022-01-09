import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Links } from '../../../utils/keys';
import { useRouter } from 'next/router';

import { withSessionSsr } from 'lib/session';
import { appSelector } from '../../redux/selector';
import { useAppSelector } from '../../redux';
import { useSessionCheck } from '../../../modules/auth/hooks/useSessionCheck';
import { useLogin } from '../../../modules/auth/hooks/useLogin';

import Typography from '@mui/material/Typography';

import Layout from 'src/containers/Layout/Layout';
import {
  AccountHeader,
  AccountMainContainer,
} from 'src/containers/pages/styles/AccountPage';
import UserDashBoard from '../../features/dashboard/UserDashboard';
import DashboardSpeedDial from '../../features/dashboard/components/DashboardSpeedDial';

function UserAccountPage({ }:
InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  useSessionCheck();
  const login = useLogin();
  const router = useRouter();
  const ctx = useAppSelector(appSelector);

  React.useEffect(() => {
    if (login.status === 'guest') {
      router.push(Links.SIGN_IN)
    }
  }, [login.status]);

  return (
    <Layout title={'Limited Edition Toys | My Account'} >
      <AccountMainContainer sx={{ position: 'relative' }}>
        <AccountHeader>
          <Typography variant="h1">My Account</Typography>
        </AccountHeader>
        <UserDashBoard />
        { ctx.ui.status.viewport === 'mobile' &&
          <DashboardSpeedDial />
        }
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
