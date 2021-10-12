import {createStyles, Theme} from "@material-ui/core";

export const style = (theme:Theme) => createStyles({
    card: {
        margin: 20,
        padding: 20,
        background: " grey !important",
    },
    cardContent: {
       margin: "20px !important"
    },
    backButton: {
        float: "right "
    },
    image:{
        width: "100%",
        margin: "16px 0 24px 0"
    }

});