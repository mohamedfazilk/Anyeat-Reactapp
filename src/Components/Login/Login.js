import React, { useContext } from 'react'
import './login.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { useState } from 'react';


const Login = () => {
const [error,setError] = useState('');
const navigate = useNavigate();

const {
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,

  validateEmail,
  validatePassword,
  setIsLoggedIn} = useContext(AuthContext)


const handleSignIn =(e)=>{
  e.preventDefault();

  const isEmailValid  = validateEmail();
  const isPasswordValid = validatePassword();
  if(!isEmailValid || !isPasswordValid){
    setError('Please enter a valid email and password')
  }
  else{
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if(email === storedEmail && password === storedPassword){
      setError('')
      setEmail('');
      setPassword('');
      setIsLoggedIn(true);
      navigate('/')
    
    }
    else{
      setError('Invalid email or password')
    }
  }
 

}

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
        marginTop: 8,
        display: 'flex',
        width: '600px',
        alignContent:'center',
        flexDirection: 'column',
        alignItems: 'center',
        border:'2px solid darkgrey',
        borderRadius: '16px'
        
      }}
    >
    
      
      <Typography component="h1" variant="h5" sx={{ mt: 1, fontWeight:500, color:'rgb(79, 79, 79);'}}>
        Login
      </Typography>
      <Box component="form"  noValidate sx={{ mt: 1, width:'75%',display: 'block',Height:'100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label={
            <Typography sx={{ fontSize: '15px',   color:'rgb(105, 105, 105)' }}>
            Remember me
            </Typography>
          }
        />

      {error && (
        <Typography sx={{ color: 'red' }}>{error}</Typography>
      )}
        <Button
          type="submit"
          fullWidth
          onClick={handleSignIn}
          variant="contained" 
          sx={{ mt: 3, mb: 2,  backgroundColor:"rgb(224, 53, 70)",':hover':{ bgcolor: "rgb(200, 45, 35)",
          color: "white"  }}}
        >
          Sign In
        </Button>
        <Grid container  sx={{  marginBottom:2}}>
          <Grid item xs>
            <Link className='no-underline' href="#" variant="body2"  color="secondary">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <span className='no-underline'>Don't have an account?</span>
            <Link to='/signup'  style={{color:'red', marginLeft:3}}className='no-underline' href="#" variant="body2" 
             sx={{ mt: 3, mb: 2,  backgroundColor:"rgb(224, 53, 70)" }}>
              {" Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
  </Container>
  )
}

export default Login