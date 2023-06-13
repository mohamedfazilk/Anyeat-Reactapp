import React from 'react'
import Imageslid from '../Imageslid/Imageslid'
import CardImages from '../Cardimages/CardImages'
import { products } from '../data'



const Home = () => {
    return (

        <div className="main_home">
             <Imageslid/>
             <CardImages products={products}/>
           
        </div>
       
       
    )
}

export default Home