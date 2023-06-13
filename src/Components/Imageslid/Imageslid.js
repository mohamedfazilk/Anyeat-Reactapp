
import React from 'react'
import Slider from "react-slick";
import { subproducts } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Imageslid = () => {

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <ArrowForwardIosIcon fontSize="small" />
   
    </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-next-arrow" onClick={onClick}>
          <ArrowBackIosNewIcon fontSize="small" />

    </button>
    );
  };

  const settings = {

    arrows: true,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  };



  return (
    <div className="main">
    <div className="main_title">
    <h3 className='main_title'>Inspiration for your first order</h3>
    </div>
    <Slider {...settings} slider>
         {subproducts.map((item,index) => (
          <div className="card" key={index}>
            <div className="card-top">
              
              <img 
                src={item.linkImg}
                
                alt={item.title}/>
            
            </div>
            <h5 className='fd_title'>{item.title}</h5>
           
           
          </div>
        ))}
      </Slider>
      
      </div>

    



  )
}

export default Imageslid