import React from 'react'
import {AppBar, Container, Typography} from '@material-ui/core'
import useStyles from './styles'
import crown from '../../images/crown.png';


const NavBar = () => {

    const classes = useStyles();
    return (
     

        <AppBar className={classes.appBar} position= "static" color="inherit">
        <img className="heading-crown" src={crown} alt="crown" height="60"/>
    <Typography className="heading" variant="h3"> PLAY TO WIN </Typography>
        <img className="heading-crown" src={crown} alt="crown" height="60"/>
</AppBar>
  
    )
}

export default NavBar;