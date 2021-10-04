import {createStyles, Theme} from "@material-ui/core";

export const style = (theme:Theme) => createStyles({
    card: {
        overflowY: "auto !important",
        margin: 20,
        background: "grey !important",
    },
     cardContent: {
       margin: "20px !important"
    }
});