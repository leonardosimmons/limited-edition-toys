import React from 'react';
import jwt from 'jsonwebtoken';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Layout from 'src/containers/Layout/Layout';
import { CLIENT_JWT_SECRET } from 'lib/constants';
import { PermissionLevel } from 'modules/auth/auth.config';
import { withIronSessionSsr } from 'iron-session/next/dist';
import { withSessionSsr } from 'lib/session';

function UserAccountPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | My Account'}>
      <div />
    </Layout>
  );
}

export default UserAccountPage;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    try {
      const decoded = jwt.verify(req.session.auth, CLIENT_JWT_SECRET);
      if ((decoded as any).data.permissionLevel >= 0) {
        return {
          props: {
            user: decoded,
          },
        };
      } else {
        return {
          redirect: {
            destination: '/user/sign-in',
            permanent: false,
          },
        };
      }
    } catch (err) {
      return {
        redirect: {
          destination: '/user/sign-in',
          permanent: false,
        },
      };
    }
  },
);

// try {
//   const decoded = jwt.verify(ctx.req.session.auth, CLIENT_JWT_SECRET);
//   if ((decoded as any).data.permissionLevel >= PermissionLevel.USER) {
//     return {
//       props: {
//         id: (decoded as any).data.id,
//         permissionLevel: (decoded as any).data.permissionLevel,
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
