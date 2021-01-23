// React Components
import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Icon from '@material-ui/core/Icon';

// Styles
const useStyles = makeStyles((theme) => ({
  
image: {
    position: 'relative',
    height: 240,
    margin: 10,
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.6,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $rolloverIcon': {
        opacity: 1,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: '.5rem'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    borderRadius: '.5rem'
  },
  rolloverIcon: {
    position: 'absolute',
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  icons: {
      fontSize: '3.8rem',
  }
}));

// Project Component
export default function Project(props) {
  const classes = useStyles();
  const image = props.image;

  const modalDetails = props.modalDetails;
  const setWhichModal = props.setWhichModal;

  const handleOpen = (which) => {
    setWhichModal(which);
  };
  
  return (      
         <ButtonBase onClick={() => handleOpen(image.title)} focusRipple key={image.title} className={classes.image} focusVisibleClassName={classes.focusVisible} style={{width: 332, }}>
           <img className={classes.imageSrc} alt={image.title} src={image.url} />
           <span className={classes.imageBackdrop} />
           <span className={classes.rolloverIcon} ><Icon className={"fas fa-search fa-3x " + classes.icons} /></span>
           <span className={classes.imageButton} ></span>
         </ButtonBase>      
  );
}
