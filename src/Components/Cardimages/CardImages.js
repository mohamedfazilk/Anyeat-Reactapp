import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { dataImages } from '../data';
import  ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';

import './cardimages.css'

const CardImages = () => {
  return (
    <div className='main_card'>
      {dataImages.map(({ id, title, price, image }) => (
        <div className="sub_card">
          <Card className='grid_card' key={id} sx={{
            maxWidth: 345,
          }}>
            <CardMedia
              className="sub_card"
              component="img"
              height="140"
              image={image}
            />
            <CardContent>
              <div className='card_content'>
                <Typography
                  className="card_text" gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {price}
                </Typography>
              </div>
              <div className='card_btn'>
              <Button variant="contained" 
               sx={{
                
               }} >
              VIEW DETAILS
            </Button>
            <Button variant="contained" 
            startIcon={<ShoppingCartCheckoutTwoToneIcon />}
            sx={{
              background:"#fb641b"
            }}>


              ADD TO CART
            </Button>
            </div>
            </CardContent>
           

            

          </Card>
        </div>
      ))}




    </div>
  )
}

export default CardImages