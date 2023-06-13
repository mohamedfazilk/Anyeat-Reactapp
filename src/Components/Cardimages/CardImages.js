import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import './cardimages.css'
import { CartContext } from '../CartContext';

const CardImages = ({products}) => {

  const {addToCart} = useContext(CartContext);
  const  handleAddToCart = (product)=>{
    addToCart(product)
    console.log(product);
  }


  return (
    <div className='main_card'>
      {products.map((product) => (
        <div className="sub_card" key={product.id}>
          <Card className='grid_card' sx={{
            maxWidth: 345,
          }}>
            <CardMedia
              className="sub_card"
              component="img"
              height="140"
              image={product.image}
            />
            <CardContent>
              <div className='card_content'>
                <Typography
                  className="card_text" gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </div>
              <div className='card_btn'>
                <Button variant="contained"
                  sx={{
                    background: "#ff9f00",
                    '&:hover': {
                      background: "#ebbe72",
                    },
                  }} >
                  VIEW DETAILS
                </Button>
                <Button variant="contained"
                  startIcon={<ShoppingCartCheckoutTwoToneIcon />}
                  sx={{
                    background: "#fb641b",
                    '&:hover': {
                      background: "#ff8b3d",
                    },
                  }}
                  onClick={()=>handleAddToCart(product)}
                >
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