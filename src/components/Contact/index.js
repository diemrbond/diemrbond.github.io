// React Components
import React from 'react';

// Custom Components
import "./index.css";

// Material UI Components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';

// Styles
const useStyles = makeStyles((theme) => ({
    contact: {
        background: '#2c3e50',
        color: 'white',
        height: 310,
    },
    typography: {
        fontSize: '3rem',
        lineHeight: "2.5rem",
        fontWeight: 700,
        marginBottom: 14,
        fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    buttons: {
        color: '#FFFFFF',
        background: '#2c3e50',
        margin: 10,
        border: '2px solid white',
        '&:hover': {
            color: '#2c3e50',
            background: "#FFFFFF",
        },
    },
    icons: {
        fontSize: '1.8rem',
    }

}));

// Contact Component
export default function Contact() {
    const classes = useStyles();

    return (
        <div >
            <footer className={classes.contact}>
                <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: 310 }}>
                    <Grid item xs={12} align="center" className={classes.grid}>                   
                        <Typography align="center" variant="h4" className={classes.typography}>CONTACT</Typography>
                        <IconButton className={classes.buttons} onClick={() => window.open("https://www.github.com/diemrbond", "_blank")}><Icon className={"fab fa-fw fa-github " + classes.icons} /></IconButton>
                        <IconButton className={classes.buttons} onClick={() => window.open("https://www.linkedin.com/in/andrew-kelleher-58018588", "_blank")}><Icon className={"fab fa-fw fa-linkedin-in " + classes.icons} /></IconButton>
                        <IconButton className={classes.buttons} onClick={() => window.open("mailto:mrbondmustdie@gmail.com", "_blank")}><Icon className={"far fa-fw fa-envelope " + classes.icons} /></IconButton>
                        <IconButton className={classes.buttons} onClick={() => window.open("./assets/docs/AndrewKelleher_Resume.pdf", "_blank")}><Icon className={"far fa-fw fa-file-pdf " + classes.icons} /></IconButton>
                    </Grid>
                </Grid>
            </footer>
        </div>
    );
}