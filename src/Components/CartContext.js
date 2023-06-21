import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { getAllProducts } from './Api-service/ApiService'
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

   


  
    const navigate = useNavigate();
useEffect(()=>{
  const fetchProducts = async () =>{
    const data = await getAllProducts();
    console.log(data);
    setProducts(data)
}
fetchProducts()

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,0)
  console.log(totalPrice);
},[cartItems])

    const handleGotoCart =()=>{
        navigate('/cart')
    }

   
    const showDeleteModal = ()=>{
      setShowDeleteConfirmation(true);
    }

    const hideDeleteModal = ()=>{
      setShowDeleteConfirmation(false);
    }

    const addToCart = (product) => {
      console.log('product added');
        const ProductExist = cartItems.find(item => item.id === product.id);
        if (ProductExist) {
          setCartItems(
            cartItems.map(item =>
              item.id === product.id
                ? { ...ProductExist, quantity: ProductExist.quantity + 1}
                : item
            )
          );
        } else {
          setCartItems([...cartItems, { 
            ...product, 
            quantity: 1  // <-- Change here
          }]);
        }
      };

      const removeFromCart =(productId) =>{
        if(showDeleteConfirmation){
          setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !==productId))
          hideDeleteModal();
        }
      }

      

        const decrementQuantity = (itemId) => {
          const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === itemId) {
              const updatedQuantity =  cartItem.quantity -1 ;
              if(updatedQuantity === 0){
                return null;
              }
              else{
                return {
                  ...cartItem,
                  quantity: updatedQuantity,
                };
              }
             
            }
            return cartItem
            
          });
          const filteredCartitems = updatedCartItems.filter(Boolean)
          setCartItems(filteredCartitems);
        };

        const clearCart =()=>{
          setCartItems([])
        }

    

        
        const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, handleGotoCart, removeFromCart, decrementQuantity,
        totalPrice,clearCart,products,
        showDeleteConfirmation,
         setShowDeleteConfirmation,showDeleteModal, 
         hideDeleteModal


         }}>
            {children}
        </CartContext.Provider>
    )
}

