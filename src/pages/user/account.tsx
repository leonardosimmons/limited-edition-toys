import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { withSessionSsr } from 'lib/session';
import { appSelector } from '../../redux/selector';
import { useAppSelector } from '../../redux';

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
  const ctx = useAppSelector(appSelector);

  const [ mobileSelection, setMobileSelection ] = React.useState<number>(0);

  function handleMobilePanelMenu(value: number) {
    setMobileSelection(value)
  }

  return (
    <Layout title={'Limited Edition Toys | My Account'} >
      <AccountMainContainer sx={{ position: 'relative' }}>
        <AccountHeader>
          <Typography variant="h1">My Account</Typography>
        </AccountHeader>
        <UserDashBoard mobileSelection={mobileSelection}/>
        { ctx.ui.status.viewport === 'mobile' &&
          <DashboardSpeedDial
            panelHandler={handleMobilePanelMenu}
          />
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
