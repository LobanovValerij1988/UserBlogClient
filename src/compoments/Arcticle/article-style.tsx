import {createStyles, Theme} from "@material-ui/core";

export const style = (theme:Theme) => createStyles({
    card: {
        height: 300,
        overflowY: "auto !important",
        margin: 20,
        background: "grey !important",
        "@media only screen and (max-width: 900px)": {
            height: 150
        }
    },
     title: {
        marginBottom: "20px !important"
     }
});