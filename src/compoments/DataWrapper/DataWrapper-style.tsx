import {createStyles, Theme} from "@material-ui/core";

export const style = (theme:Theme) => createStyles({
    root: {
          flex: "1 1 0",
    },
    pageCounter: {
      margin:"0 20px !important",
      display: "flex",
      justifyContent: "center",
      alignItems:"center"
    }
});