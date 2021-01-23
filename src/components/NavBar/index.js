// React Components
import React from 'react';
import './index.css';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { Link, useLocation } from "react-router-dom";
import MenuDrawer from '../MenuDrawer'

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#212529',
    height: 95,
    paddingTop: '0.9rem',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    minHeight: 64
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: '1.85em',
    fontWeight: 'bold !important',
    fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  button: {
    marginRight: theme.spacing(1),
    fontSize: '1.2em',
    color: 'white',
    fontWeight: 'bold !important',
    fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    '&:hover': {
      color: '#1abc9c',
    }
  }
}));

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/About` },
  { title: `Portfolio`, path: `/Portfolio` },
];

// NavBar Component
export default function NavBar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Container className={classes.container} >
            <Typography className={classes.title} variant="h6" noWrap>
              ANDREW KELLEHER
              </Typography>
            <Hidden smDown>
              <div>
                <Link to="/" className={location.pathname === "/" ? "active" : "not-active"}>
                  <Button className={classes.button}>Home</Button>
                </Link>
                <Link to="/About" className={location.pathname === "/About" ? "active" : "not-active"}>
                  <Button className={classes.button}>ABOUT</Button>
                </Link>
                <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "active" : "not-active"}>
                  <Button className={classes.button}>PORTFOLIO</Button>
                </Link>
              </div>
            </Hidden>
            <Hidden mdUp>
              <MenuDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}


