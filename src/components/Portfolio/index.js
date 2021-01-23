// React Components
import React, { useState } from 'react';

// Custom Components
import Project from '../Project';
import Modals from '../Modals';

// Images
import Bodyweight from '../Project/assets/bodyweight.gif'
import Readme from '../Project/assets/readme.png'
import Truck from '../Project/assets/truck.png'
import Team from '../Project/assets/team.png'
import Interface from '../Project/assets/interface.gif'
import Burger from '../Project/assets/burger.png'
import Quiz from '../Project/assets/quiz.png'
import Weather from '../Project/assets/weather.png'
import Employee from '../Project/assets/employee.png'


// Material UI Components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const images = [
    {
      url: Truck,
      title: 'DirectShip WA',
    },
    {
      url: Bodyweight,
      title: 'Bodyweight Gym',
    },
    {
      url: Readme,
      title: 'Readme Generator',
    },
    {
      url: Team,
      title: 'Team Generator',
    },
    {
      url: Interface,
      title: 'Interface Design',
    },
    {
      url: Burger,
      title: 'Eat the Burger!',
    },
    {
      url: Quiz,
      title: 'JavaScript Quiz',
    },
    {
      url: Weather,
      title: 'Weather Dashboard',
    },
    {
      url: Employee,
      title: 'Employee Directory',
    },
  ];

// Styles
const useStyles = makeStyles((theme) => ({
    portfolio: {
        color: '#f8f9fa',
        background: '#ffffff',
        minHeight: 500,
    },
    typography: {
        color: '#212529',
        fontSize: '3rem',
        lineHeight: "2.5rem",
        fontWeight: 700,
        marginBottom: 14,
        fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    body: {
        color: '#212529',
        fontSize: '1rem',
        marginTop: 14,
        marginRight: 14,
        marginLeft: 14,
    },
    button: {
        textTransform: 'unset !important',
    },
    grid: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    paragraph: {
        display: "flex",
        justifyContent: "center",
    }
}));

// Portfolio Component
export default function Portfolio() {
    const classes = useStyles();
    const [whichModal, setWhichModal] = useState("");

    return (
        <div >
            <div className={classes.portfolio}>
                <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: 500 }}>
                    <div>
                     <Grid item xs={12} align="center" className={classes.grid}>
                        <Typography align="center" variant="h4" className={classes.typography}>PORTFOLIO</Typography>   
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><Icon className="fas fa-folder-open" /></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        {images.map((image) => (
                            <Project image={image} modalDetails={whichModal} setWhichModal={setWhichModal}/>
                        ))}
                        <Modals modalDetails={whichModal} setWhichModal={setWhichModal}/>
                   </Grid>
                   </div>
                </Grid>
            </div>
        </div>
    );
}