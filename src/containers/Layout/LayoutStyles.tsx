import { makeStyles, Theme } from "@material-ui/core";
import createStyles from "@material-ui/styles/createStyles";

const useLayoutStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
    },
    main: {
      flex: 1,
      height: "100%",
      width: "100%",
      margin: 0,
    },
  })
);

export default useLayoutStyles;
