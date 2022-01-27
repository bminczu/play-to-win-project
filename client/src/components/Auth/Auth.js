import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Container, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login'
import Input from './Input'
import useStyles from './styles'
import Icon from './Icon'


const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)

    const [isSignup, setIsSignup] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => {

    }

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !isSignup);
        handleShowPassword(false)
    }

    const googleSuccess = (res) => {
        console.log(res)

    }

    const googleFailure = () => {
        console.log("Google sign in unsuccesful. Please try again")
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                            <>
                                <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last name" handleChange={handleChange} half/>
                            </>
                        )}
                         <Input name="email" label="Email address" handleChange={handleChange} type="email"/>
                         <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        
                    </Grid>
                    <GoogleLogin 
                    clientId="54955212576-0b09ugcqucq3d2ail8l46ejjv9moc55l.apps.googleusercontent.com"
                    render={(renderProps)=> (
                        <Button className="googleButton" color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained"> 
                        Google Sign In
                        </Button>
                    )}
                    onSuccess ={googleSuccess}
                    onFailure = {googleFailure}
                    cookiePolicy = "single_host_origin"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}

                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
