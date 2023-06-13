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
        <h3>cart image</h3>
        </div>
        </div>
        <div className='cart_right'>
        <div className='cart_content'>
          cart details
          <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.title} - {item.price}
                    </li>
                  ))}
                </ul>
        </div>
      </div>
      </div>
        )}
      </div>
    </div>

  )
}

export default Addcart