import React from 'react'
import { Avatar, Button, Paper, Grid, Container, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from 'material-ui/icons/LockOutlinedIcon';
import Input from './input'

const Auth = () => {
    const classes = useStyles();

    const isSignup = false;

    const handleSubmit = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper classes={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                        isSignup && (
                            <>
                                <Input name="firstName" label="First name" handleChnage={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last name" handleChnage={handleChange} half/>
                            </>
                         )}
                         <Input name="email" label="Email address" handleChange={handleChange} type="email"/>
                         <Input name="email" label="Email address" handleChange={handleChange} type="email"/>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
