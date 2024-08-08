import React, { useEffect, useRef } from 'react'
import gsap from "gsap"

const AboutUs = () => {


    useEffect(() => {
        gsap.fromTo(
          '.fade-in-section',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.fade-in-section',
              start: 'top 80%',
              end: 'top -15%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }, []);

    return (
        <div className='wrapper'>
            <div className='h-[90vh] w-[100%] flex justify-between items-center'>
                <div className='xl:w-[45%] fade-in-section text-[#403c53]'>
                    <div className='header xl:pb-0 pb-6'>About us</div>
                    <div className='title text-[#a3a8ac]'>At Spellbrush, we fuse cutting-edge AI with
                        anime artistry to revolutionize gaming. As
                        creators of niji・journey, we empower
                        artists to craft masterpieces, blending
                        balanced gameplay with stunning visuals.</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AboutUs