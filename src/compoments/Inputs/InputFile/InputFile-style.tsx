import {createStyles, Theme} from "@material-ui/core";

export const style = (theme:Theme) => createStyles({
   warning: {
       color: "#d32f2f",
       margin: "0 14px 0 14px",
       fontSize: "0.75rem"
   },
   inputWrapper: {
       marginTop: "16px",
       marginBottom: "24px"
    }
});