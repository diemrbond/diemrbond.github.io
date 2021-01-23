import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import TruckPreview from './assets/directship.png';
import BodyweightPreview from './assets/bodyweight.png';
import ReadmePreview from './assets/readme.gif';
import TeamPreview from './assets/team.gif';
import InterfacePreview from './assets/interface-preview.png';
import BurgerPreview from './assets/burger.gif';
import QuizPreview from './assets/quiz-preview.png';
import WeatherPreview from './assets/weather-preview.png';
import EmployeePreview from './assets/employee.gif';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const theModals = [
  {
    url: TruckPreview,
    title: 'DirectShip WA',
    text: "This application was written for Trucking Centre Western Australia, to help staff keep track of requests sent from remote branches to the main warehouse. We used Passport & Bcrypt for security, Express JS & Handlebars, Faker.js for seeds along with Sequelize to create this project. This company will be using this project.",
    github: "https://github.com/diemrbond/Direct-Ship",
    project: "http://direct-ship.herokuapp.com/"
  },
  {
    url: BodyweightPreview,
    title: 'Bodyweight Gym',
    text: "For a group project at the UWA Coding Bootcamp, we designed a sleek and user friendly follow along workout web application that helps users with their at home workout routines. This application was designed using HTML, CSS, Javascript and JQuery. The styling was completed using the Bulma CSS framework, keeping the design simple and easy to follow. The user is asked to 'log in' using a pop up modal, where the user is able to input their name and their location, which are both stored into local storage.",
    github: "https://github.com/diemrbond/The-Bodyweight-Gym-Online",
    project: "https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/"
  },
  {
    url: ReadmePreview,
    title: 'Readme Generator',
    text: "This app will allow you to create a professional readme.md file for your github directory, just by answering some simple question prompts.",
    github: "https://github.com/diemrbond/ReadmeGenerator",
  },
  {
    url: TeamPreview,
    title: 'Team Generator',
    text: "This app will allow you to create a team member summary page, just by answering some simple question prompts. Using the inquirer package, you can setup your team quickly and easily. The app will verify the email address are valid via API call, and will check if the github account exists and retrieve the Avatar for Engineers.",
    github: "https://github.com/diemrbond/TeamGenerator"
  },
  {
    url: InterfacePreview,
    title: 'Interface Design',
    text: "As part of my regular old day job for the last 18+ years, I've been in charge of the design, development and coding of the Interface our company uses for providing training inductions for our clients. Using a combination of Adobe Animate, JavaScript, Node.js, FFMPEG and a variety of other technologies, we are able to deliver high quality content across multiple devices to induct and onboard contractors and staff alike. Unfortunately, as the Interface uses proprietary software I am unable to show you the Git Repository - but feel free to browse this recent demonstration video.",
    project: "https://reviews.cellmedia.com.au/Perenti/Interface/"
  },
  {
    url: BurgerPreview,
    title: 'Eat the Burger!',
    text: "For this assignment, we created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. We used Node and MySQL to query and route data on the app, and Handlebars to generate our HTML. This was then hosted on Heroku.",
    github: "https://github.com/diemrbond/burger",
    project: "https://andrew-eats-burgers.herokuapp.com/"
  },
  {
    url: QuizPreview,
    title: 'JavaScript Quiz',
    text: "For this project we needed to create a timed quiz on JavaScript that stores highscores to the localStorage, allows the user to reset the scores and compare their score to the top scores.",
    github: "https://github.com/diemrbond/JavascriptQuiz",
    project: "https://diemrbond.github.io/JavascriptQuiz/"
  },
  {
    url: WeatherPreview,
    title: 'Weather Dashboard',
    text: "For this project we needed to make a Weather Dashboard, that we can search for a City using the openweathermap API returning the temperature, humidity, UV index, wind speed and a 5 day forecast. The cities needed to be added to a search history for easy re-searching.",
    github: "https://github.com/diemrbond/WeatherDashboard",
    project: "https://diemrbond.github.io/WeatherDashboard/"
  },
  {
    url: EmployeePreview,
    title: 'Employee Directory',
    text: "For this project, we needed to create a working Employee Directory using React JS. The project required to be broken up into components, using component state and responding to user events. They should be able to sort by table headers and filter by employee name. I also included Material UI for the styling.",
    github: "https://github.com/diemrbond/EmployeeDirectory",
    project: "https://diemrbond.github.io/EmployeeDirectory/"
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '2rem',
    border: 0,
    outline: 'none',
    maxWidth: 900,
    margin: 50,
  },
  imageSrc: {
    height: '100%',
    width: '100%'
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
    margin: 5,
    color: '#FFFFFF',
    background: '#1abc9c',
    '&:hover': {
      color: '#FFFFFF',
      background: "#159a80",
    },
  },
  gitButton: {
    textTransform: 'unset !important',
    margin: 5,
    color: '#FFFFFF',
    background: '#17a2b8',
    '&:hover': {
      color: '#FFFFFF',
      background: "#138496",
    },
  },
  icons: {
    marginRight: 10
  }
}));

export default function Modals(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  const modalDetails = props.modalDetails;
  const setWhichModal = props.setWhichModal;

  const [currentModal, setCurrentModal] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setWhichModal("");
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    if (modalDetails !== "") {

      for (var i = 0; i < theModals.length; i++) {

        if (theModals[i].title === modalDetails) {
          setCurrentModal(i);
        }
      }

      setOpen(true);
    }

  }, [modalDetails]);

  return (
    <div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description" maxWidth='false'
        >
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <div className={classes.paper} align="center">
                <Typography id="transition-modal-title" align="center" variant="h2" className={classes.typography}>{theModals[currentModal].title}</Typography>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><Icon className="fas fa-star" /></div>
                  <div className="divider-custom-line"></div>
                </div>
                <img className={classes.imageSrc} alt={theModals[currentModal].title} src={theModals[currentModal].url} smDown={9} />
                <Typography id="transition-modal-description" variant="body1" className={classes.body}>{theModals[currentModal].text}</Typography>
                <Box m={5} >
                  {theModals[currentModal].project !== undefined &&
                    <Button onClick={() => window.open(theModals[currentModal].project, "_blank")} variant="contained" color="warning" disableElevation size="large" className={classes.button}>Visit Project</Button>}
                  {theModals[currentModal].github !== undefined &&
                    <Button onClick={() => window.open(theModals[currentModal].github, "_blank")} variant="contained" color="warning" disableElevation size="large" className={classes.gitButton}><Icon className={"fab fa-github " + classes.icons} /> Visit GitHub</Button>}
                </Box>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
