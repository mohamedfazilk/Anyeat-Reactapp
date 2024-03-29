import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (

        <Container component="main" maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }} >

            <Link to='/'>

                <img className='header_logo loginlogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png" alt=""
                />
            </Link>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    width: '550px',
                    alignContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '2px solid darkgrey',
                    borderRadius: '16px'

                }}
            >


                <Typography component="h1" variant="h5" sx={{ mt: 1, fontWeight: 500, color: 'rgb(79, 79, 79);' }}>
                    Signup
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1, width: '75%', display: 'block', Height: '100%' }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="fullname"
                        autoComplete="fullname"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label={
                            
                            <Typography sx={{ fontSize: '12px' }}>
                            I agree to AnyEat's <span style={{color: 'red', cursor: 'pointer'}}>Terms of Service, Privacy Policy and Content Policies</span>
                            </Typography>
                        }
                        sx={{  color: 'rgb(105, 105, 105)' }}
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3, mb: 2, backgroundColor: "rgb(224, 53, 70)", ':hover': {
                                bgcolor: "rgb(200, 45, 35)",
                                color: "white"
                            }
                        }}
                    >
                        Sign up
                    </Button>
                    <Grid container sx={{ marginBottom: 2 }}>
                        <Grid item xs>
                            <Link className='no-underline' href="#" variant="body2" color="secondary">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <span className='no-underline'> Already have an account?</span>
                            <Link  style={{color:'red', marginLeft:3}}to='/login'  className='no-underline'  variant="body2" 
                            sx={{
                                mt: 3, mb: 2, cursor: 'pointer',
                               
                            }}>
                               Log in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            
        </Container>
    )
}

export default Signup