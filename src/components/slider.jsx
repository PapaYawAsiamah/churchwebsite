// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import "../styles/slider.css"


function Banner()
{
 const images = [
    {
        index:0,
        src:"/church.jpg",
    },
    {
        index:1,
        src:"/banner.jpg",
    }
 ];

 return(
  <React.Fragment>
  
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">   
   {
    images.map( (image)=>(
    <div className={ image.index===0? "carousel-item active":"carousel-item" } key={image.index }>
      <img src={image.src} className="d-block w-100" alt='...'/>
    </div>
    ))
}
   

    
        
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </React.Fragment>

 );
}
export default Banner;