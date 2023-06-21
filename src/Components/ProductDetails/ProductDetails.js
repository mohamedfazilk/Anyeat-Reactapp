import React,{useEffect} from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { getAllProducts, getProductById } from '../Api-service/ApiService'
import './ProductDetails.css'

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({})
    const {id} = useParams();

    useEffect(() => {
      const  fetchProductDetails = async()=>{
        const data = await getProductById(id);
        setProductDetails(data)
        console.log(data);
        }
        fetchProductDetails();

    }, [id])
    

  return (
    <div className='product-container'>
        <img className='product-img' src={productDetails.image} alt="" />
        <div className="product_info">
            <h2 className='product_title'>{productDetails.title}</h2>
            <p className='product_description'>{productDetails.description}</p>
            <p className='product_price'>{productDetails.price}</p>
            <button className='buy_btn'>Buy Now</button>
            <button className='Goback-btn'>Go Back</button>
        </div>
      
    </div>
  )
}

export default ProductDetails
