import { Typography } from '@mui/material';
import React, { useState } from 'react'
import Slider from "react-slick";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { dataImg } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css'



const Imageslid = () => {

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
      >
        Prev
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="custom-arrow custom-next-arrow"
        onClick={onClick}
      >
        Next
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
    <Slider {...settings} >
         {dataImg.map((item) => (
          <div className="card">
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

    // <Container className='slider-wrapper' component="main" maxWidth="xl" sx={{
    //   background: 'rgb(248, 248, 248)',
    //   minHeight: '250px',
    //   width: '100%',
    //   height: '100%',
    //   display: 'inline-block',
    // }}>
    //   <Box>
    //     <Typography sx={{
    //       color: 'rgb(28, 28, 28)',
    //       fontSize: '22px',
    //       margin: '20px', // Apply margin only to top and bottom
    //     }}>
    //       Inspiration for your first order
    //     </Typography>
    //     <Slider {...settings}>
    //     {dataImg.map((item) => (
    //       <div className="card">
    //         <div className="card-top">
    //           <img
    //             src={item.linkImg}
    //             alt={item.title}/>
    //           <h1>{item.title}</h1>
    //         </div>
    //         <div className="card-bottom">
    //           <h3>{item.price}</h3>
    //           <span className="category">{item.category}</span>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>


    //   </Box>


    // </Container>



  )
}

export default Imageslid