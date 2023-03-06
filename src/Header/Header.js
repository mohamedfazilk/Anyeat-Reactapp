import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from 'react-router-dom';




const Header = () => {


  return (
    <div className='header-container'>
      
      <div className="header-left">
        <Link to='/'>
        <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png" alt="" />
        </Link>
        <div className="header_searchpart">
          <div className="drop_icon">
            <form className='searchinputdrop'>

              <TextField id="my-dropdown"
                select
                variant="standard"
                required={true} defaultValue='' InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment>
                      < FmdGoodIcon className='map' />
                      <span>select your  location</span>
                    </InputAdornment>
                  )
                }}


              >
                <MenuItem value="" disabled>
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value="option1">Malappuram</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </TextField>

              <TextField id='searchfield'
                type="search"
                variant="standard"
                margin="normal"
                placeholder="Search for restaurant, cuisine or a dish"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="header_auth">
        <Link to='/login' className='no-underline'>
          <span className='header_optionOne'>Log in</span>
          </Link>
          <span className='header_optionTwo'>Sign up</span>
        </div>

      </div>
    </div>
  )
}

export default Header