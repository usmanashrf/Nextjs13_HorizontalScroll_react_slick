'use client';
import React from 'react'
import Image from 'next/image'
import pic1 from "/public/pic1.jpg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import { useEffect, useRef } from "react";

export default function ImageSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:true,
        arrows:false,
      };
    
      const slider = useRef<Slider>(null);
    
      function scroll(e: WheelEvent){
          if (slider === null)
              return 0;
        if(slider.current){
            e.deltaY > 0 ? (
                slider.current.slickNext()
            ) : (
                slider.current.slickPrev()
            );
        }
      };
      useEffect(() => {
          window.addEventListener("wheel", scroll,true);
          return () => {
              window.removeEventListener("wheel", scroll, true);
          };
      }, []);
  return (
    <div className='ml-[600px] pt-10' >
        {
             <Slider  {...settings} ref={slider}>
             <div >
             <Image alt="" src={pic1}/>
             </div>
             <div>
             <Image alt="" src={pic2}/>
             </div>
             <div>
             <Image alt="" src={pic3}/>
             </div>
             <div>
             <Image alt="" src={pic4}/>
             </div>
             <div>
             <Image alt="" src={pic1}/>
             </div>
            
           </Slider>

        }
       
    </div>
  )
}
