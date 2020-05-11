import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'



class CarouselHome extends Component{



    render(){
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-150"
      src="http://www.sitedumariagetunisie.com/wp-content/uploads/2015/05/awamria-awled-rejeb-slider.jpg" 
    
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-150"
      src="http://www.sitedumariagetunisie.com/wp-content/uploads/2015/06/samira-rajah.jpg" 
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-150"
      src="http://www.sitedumariagetunisie.com/wp-content/uploads/2015/07/boularas-wahiba1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)}}
 export default CarouselHome