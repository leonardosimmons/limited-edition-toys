import { GetStaticProps, InferGetStaticPropsType } from "next";
import Typography from "@material-ui/core/Typography";

function Index({
  test,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return <Typography variant="h1">{test}</Typography>;
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: "Home Page",
    },
  };
};
