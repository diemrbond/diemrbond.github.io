import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%',
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#ffffff'
    },
}));

const MenuDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ top: false });

    const toggleDrawer = (anchor, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ [anchor]: open });
    };

    const drawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} align="center"/>
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("top", true)}>
                <MenuIcon className={classes.menuButton}/>
            </IconButton>

            <Drawer anchor="top" open={state.top} onOpen={toggleDrawer("top", true)} onClose={toggleDrawer("top", false)} >
                {drawerList("top")}
            </Drawer>
        </>
    );
};

export default MenuDrawer;
