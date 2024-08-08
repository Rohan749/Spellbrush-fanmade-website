import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = ({title, img, description, index}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={`w-[100%] flex flex-col ${index%2 == 0 ? "xl:flex-row": "xl:flex-row-reverse"} items-center bg-[#fff] xl:min-h-[41rem] xl:p-14`}>
        <div data-aos={`${index%2 == 0 ?"fade-right" : "fade-left"}`}>
          <img src={img} alt={title} />
        </div>
        <div data-aos="fade" className={`${index%2 == 0 ? "xl:text-left": "xl:text-right"} `}>
        <div className='text-4xl py-5 text-[#1a1b1f] heading'>
          {title}
        </div>
        <div className='subtitle text-[#929292]'>
          {description}
        </div>
        </div>
    </div>
  )
}

export default Cards