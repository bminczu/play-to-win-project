import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Container, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input'
import useStyles from './styles'

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)

    const isSignup = false;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => {

    }

    const handleChange = () => {

    };

    
    return (
        <Container component="main" maxWidth="xs">
            <Paper classes={classes.paper} elevation={3}>
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
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}

                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
