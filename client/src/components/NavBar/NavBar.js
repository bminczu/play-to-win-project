import React, { useState, useEffect} from 'react';
import {AppBar, Avatar, Toolbar, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import crown from '../../images/crown.png';


const NavBar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)
    return (
     

        <AppBar className={classes.appBar} position= "static" color="inherit">
            <div className={classes.brandContainer}> 

            <img className="heading-crown" src={crown} alt="crown" height="60"/>
            <Typography component={Link} to="/" className={classes.heading} variant="h3"> PLAY TO WIN </Typography>
            <img className="heading-crown" src={crown} alt="crown" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In </Button>
            )}
            </Toolbar>
        </AppBar>
  
    )
}

export default NavBar;