import axios from "axios";


// const API_KEY = 1;
// const  BASE_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

// export const getAllProducts = async()=>{
//     const response = await axios.get(BASE_URL);
//     console.log('thias'+response.data);
//     return response.data;
    
   
// }
const  BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = async()=>{
    const response = await axios.get(`${BASE_URL}/products`)
    console.log(response.data);
    return response.data;
 
}


export const getProductById = async(id)=>{
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data;
}

export const getProductImage = async(id)=>{
    const response = await axios.get(`${BASE_URL}/products/${id}/image`)
    return response.data;
}