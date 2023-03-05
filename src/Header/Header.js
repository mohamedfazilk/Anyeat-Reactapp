import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";


const Header = () => {




  return (
    <div className='header-container'>

      Header
      <div className="header-left">
        <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png" alt="" />
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
                      < FmdGoodIcon />
                    </InputAdornment>
                  )

                }}>
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

      </div>
    </div>
  )
}

export default Header