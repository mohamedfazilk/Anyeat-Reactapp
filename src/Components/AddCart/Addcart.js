import React,{useContext} from 'react'
import './Addcart.css'
import { CartContext } from '../CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Button } from '@mui/material';



const Addcart = () => {
  const {cartItems,addToCart,removeFromCart,decrementQuantity,
    totalPrice,clearCart,
    showDeleteConfirmation,
    showDeleteModal, 
    hideDeleteModal,
  } = useContext(CartContext)
  

  return (

    <div className='cart_container'>
      
       { cartItems && cartItems.length === 0 ? (
           <h3>No items were added</h3>
      ) :(
      <div className='cart_item'>
        <div className="clearcart">
             {cartItems.length >=1 &&(
               <Button variant="contained"
               
               sx={{
                 background: "#fb641b",
                 marginLeft:'20px',
                 '&:hover': {
                   background: "#ff8b3d",
                   
                 },
               }}
               onClick={clearCart}
             >
              CLEAR CART
             </Button>
            )}
        </div>
        <h2>Continue Your Shopping </h2>
        {cartItems.map((item) => (
           <div key={item.id} className='cart_details cart_details_line'>
              <div className='cart_image'>
              <img src={item.image} alt={item.title} />
          </div>
          <div className='cart_title'>
          <h3>{item.title}</h3>
           </div>
           <div className='cart_price'>
            <span>{item.quantity}*${item.price}</span>
           </div> 
           <div className='cart_buttons'>
           <Icon onClick={()=>decrementQuantity(item.id)}>remove_circle</Icon>
           <input type='number' value={item.quantity} disabled/>
           <Icon onClick={()=>addToCart(item)}>add_circle</Icon>
           <Icon sx={{ fontSize: 30 }}></Icon>
          {
            showDeleteConfirmation &&(
              <div className="modal">
          <div className="modal-content">
            <h2>Delete Confirmation</h2>
            <p>Are you sure you want to remove this item from the cart?</p>
            <div className="modal-buttons">
              <button className="modal-button cancel" onClick={hideDeleteModal}>
                Cancel
              </button>
              <button className="modal-button delete" onClick={()=>removeFromCart(item.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
            )
          }
       <IconButton onClick={showDeleteModal} aria-label="delete">
        <DeleteIcon />
       </IconButton>
           </div>
           </div>
        ))}

        <div className="total_cart">
 
          <div className="cart_price">
            Total Price: ${totalPrice}
         
          </div>

          <div className="place_order">
          <Button variant="contained"
               
               sx={{
                 background: "#fb641b",
                 marginLeft:'20px',
                 '&:hover': {
                   background: "#ff8b3d",
                   
                 },
               }}
               
             >
              PLACE ORDER
             </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Addcart