// React Components
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';

// Custom Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  site: {
    flex: 1
  },
}));

// App Function
function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Router>
        <div className={classes.site}>
          <NavBar />
          <Hero />
          <Route exact path="/"></Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
