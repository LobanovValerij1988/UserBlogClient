import React from "react";
import {Box, Typography} from "@material-ui/core";
import {ITabPanelProps} from "../../../interfaces/interfaces";

function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role = "tabpanel"
            hidden = {value !== index}
            id = {`simple-tabpanel-${index}`}
            aria-labelledby = {`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx = {{ p: 3 }}>
                    <Typography> {children} </Typography>
                </Box>
            )}
        </div>
    );
}
export default  TabPanel