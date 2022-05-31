import React, { Component } from "react";

import {Card,Carousel} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
// import image3 from '../images/download.png'
import shoping4 from '../images/shoping3.png'
import shoping5 from '../images/shoping5.png'
import shoping6 from '../images/shoping6.png'
import shoping7 from '../images/Types-Of-Ecommerce.png'
import shoping8 from '../images/ecommerce-web-page-concept-illustration_114360-8204.png'


export const UserSlider = () => {
  return (
    <div style={{marinTop:'80px',height:'400px'}}>
      <Carousel>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src={shoping7}
                          alt="Second slide"
                        />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src={shoping8}
                          alt="Third slide"
                        />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src={shoping6}
                          alt="First slide"
                        />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
