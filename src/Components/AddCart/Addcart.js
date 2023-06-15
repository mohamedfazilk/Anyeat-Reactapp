import React,{useContext} from 'react'
import './Addcart.css'
import { CartContext } from '../CartContext'

const Addcart = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='add_cart'>
      <div className='addcart_details'>
        {cartItems.length === 0 ?(
          <h3>card is empty</h3>
        ) :(


        <div className='cart-container'>
          
        <div className='cart-left'>
        <div className='cart_img'>
        </div>
        </div>
        <div className='cart_right'>
        <div className='cart_content'>
        <h2>Cart Items:</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <img src={item.image} alt={item.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
       
        </div>
      </div>
      </div>
        )}
      </div>
    </div>

  )
}

export default Addcart