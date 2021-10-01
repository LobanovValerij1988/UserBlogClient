import React, {useContext} from "react";
import {Box, Tabs, Tab, Button} from "@material-ui/core";
import TabPanel from "./TabPanel/TabPanel";
import { useHistory  } from "react-router";
import {style} from "./NavigationMenu-style";
import {WithStyles, withStyles} from "@material-ui/styles";
import {UserRegistered} from "../App/App";

interface INavigationMenu extends WithStyles<typeof style>{
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NavigationMenu = withStyles(style)(  ({classes }:INavigationMenu) => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const setUser = useContext(UserRegistered)

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        switch (newValue){
            case 0:
                history.push("/")
                break;
            case 1:
                history.push("/createNewPost")
                break;
            case 2:
                history.push("/somethingelse")
                break;
            default:
                history.push("/404")
        }
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Get all posts" {...a11yProps(0)} />
                    <Tab label="create new post" {...a11yProps(1)} />
                    <Tab label="something else" {...a11yProps(2)} />
                </Tabs>
                <Button className={classes.button} color={"error"} onClick={logout} > Logout </Button>
            </Box>
            <TabPanel value={value} index={0}> </TabPanel>
            <TabPanel value={value} index={1}> </TabPanel>
            <TabPanel value={value} index={2}> </TabPanel>

        </Box>
    );
})

export default NavigationMenu