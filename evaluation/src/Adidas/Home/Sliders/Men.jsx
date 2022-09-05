import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components'
import './men.css'


const Men=()=>{
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      


    return (
        <>
        <Carousel responsive={responsive}>
  <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/9303bc462f5742c6897bae96017af263_9366/nmd_v3-shoes.jpg" alt="adidas"></img>
    <p>ORIGINALS SHOES</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/343c7faeb2ac486e9330ae2b00503850_9366/supernova-2-running-shoes.jpg" alt="adidas"></img>
    <p>RUNNING SHOES</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/38f26daf70f7400b8e0ead7b00c3a58f_9366/predator-edge.3-low-indoor-boots.jpg" alt="adidas"></img>
    <p>FOOTBALL SHOES</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/d72730bb81f8486ebd78acb8010e0821_9366/ultraboost-21-shoes.jpg" alt="adidas"></img>
    <p>ULTRABOOTS</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bc86f3295894a3eb413aef900ca9ec6_9366/m-sereno-1-4-tt.jpg" alt="adidas"></img>
    <p>TRACKSUIT</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e6b7cd074984239b22aac8300be5dce_9366/aeroready-designed-to-move-sport-3-stripes-tank-top.jpg" alt="adidas"></img>
    <p>T-SHIRTS</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbdd2263907447ada590ae8c00bd96aa_9366/fleece-pants.jpg" alt="adidas"></img>
    <p>JOGGERS & TRACKSUIT BOTTOMS</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/9303bc462f5742c6897bae96017af263_9366/nmd_v3-shoes.jpg" alt="adidas"></img>
    <p>ORIGINALS SHOES</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/9303bc462f5742c6897bae96017af263_9366/nmd_v3-shoes.jpg" alt="adidas"></img>
    <p>ORIGINALS SHOES</p> 
    </div>
    <div className='men_slider_div'>
    <img src="https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/9303bc462f5742c6897bae96017af263_9366/nmd_v3-shoes.jpg" alt="adidas"></img>
    <p>ORIGINALS SHOES</p> 
    </div>
  
</Carousel>;
        </>
    )
}
export default Men;