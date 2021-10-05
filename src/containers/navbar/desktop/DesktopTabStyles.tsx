import { makeStyles, Theme } from "@material-ui/core";
import createStyles from "@material-ui/styles/createStyles";

const useDesktopTabStyles = makeStyles(({}: Theme) =>
  createStyles({
    button: {
      fontSize: "1rem",
    },

    divider: {
      margin: "10px",
    },
  })
);

export default useDesktopTabStyles;
