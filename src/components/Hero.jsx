import React, { useEffect } from 'react'
import gsap from "gsap"
import heroImg from "../assets/arrowmancer.png"
import video from "../assets/video.webm"

const Hero = () => {

  useEffect(() => {
    gsap.to(".fade", {
      opacity: 1,
      delay: 1
    })
  })



  return (
    <div className='wrapper '>
        <div className='xl:h-[80vh] w-[100%] flex xl:flex-row flex-col-reverse justify-between xl:pt-0 pt-[7rem] lg:pt-[5rem] xl:items-end '>
        <div >
          {/* <img className='xl:hidden block' src={heroImg} alt='' /> */}
          <video className='xl:hidden block' width="640" height="360" autoPlay muted loop={true}>
        <source src={video} type='video/mp4' codecs="hvc1"/>
        Your browser does not support the video tag.
    </video>
        </div>
        <div className='xl:w-[50%] fade opacity-0 xl:text-right '>
            <div className='header xl:pb-0 pb-6 text-[#403c53] xl:text-white'>Unleashing the future of Anime Gaming</div>
            <div className='title sm:text-[#a3a8ac] text-[#403c53] '>Combining the Power of AI and the Beauty of 
            Anime to Create Unforgettable Gaming Experiences</div>
        </div>
        </div>
    </div>
  )
}

export default Hero