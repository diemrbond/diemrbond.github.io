// React Components
import React from 'react';
import "./index.css";

// Custom Components
import Avatar from './Avatar.png';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

// Styles
const useStyles = makeStyles((theme) => ({
    hero: {
        color: 'white',
        height: 600,
    },
    avatar: {
        paddingBottom: 30
    },
    typography: {
        fontSize: '3rem',
        lineHeight: "2.5rem",
        fontWeight: 700,
        marginBottom: 14,
        fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginTop: 14,
    },
}));

// Hero Component
export default function Hero() {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.hero}>
                <Grid className="hero" container spacing={0} alignItems="center" justify="center" >
                     <Grid item xs={12} align="center" className={classes.grid}>
                        <img src={Avatar} alt="Avatar" className={classes.avatar} />
                        <Typography align="center" variant="h4" className={classes.typography}>ANDREW KELLEHER</Typography>                          
                        <div className="divider-custom-white">
                            <div className="divider-custom-white-line"></div>
                            <div className="divider-custom-white-icon"><Icon className="fas fa-code" /></div>
                            <div className="divider-custom-white-line"></div>
                        </div>
                        <Typography align="center" variant="subtitle1" className={classes.subtitle}>Multimedia Design & Web Development</Typography>                        
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}