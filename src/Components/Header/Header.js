import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Badge } from '@mui/material';

const Header = () => {
  const { cartItems } = useContext(CartContext)
  const cartItemCount = cartItems.length;
  console.log(cartItemCount);
  return (
    <div className='header-container'>

      <div className="header-left">
        <Link to='/'>
          <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png" alt="" />
        </Link>
        <div className="header_searchpart">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">

            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for restaurant, cuisine or a dish"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '12px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          </Paper>
        </div>
      </div>

      <div className="header-right">

        <div className="header_auth">
        <Link to="/cart">
          <IconButton
            sx={{
              marginRight: '29px',
              color: 'rgb(255, 126, 139)'
            }}>
            <Badge badgeContent={cartItemCount} color="primary"
              sx={{ fontSize: '0.75rem' }} >
              <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
            </Badge>

          </IconButton>
            </Link>

          <Link to='/login' className='no-underline'>
            <span className='header_optionOne'>Log in</span>
          </Link>
          <Link to='/signup' className='no-underline'>
            <span className='header_optionTwo'>Sign up</span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header