import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from 'src/containers/Layout';

function Index({
  test,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return <Layout title={'Limited Edition Toys | Home'}></Layout>;
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: 'Home Page',
    },
  };
};
