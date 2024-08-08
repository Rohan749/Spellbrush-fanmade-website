import React, { useEffect, useRef } from 'react'
import gsap from "gsap"


const Phrase2 = () => {

    useEffect(() => {
        gsap.fromTo(
          '.section3',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.section3',
              start: 'top 40%',
              end: 'top -30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }, []);
    return (
        <div className='wrapper'>
            <div className='h-[90vh] w-[100%] flex justify-between items-center section3 text-[#403c53]'>
                <div className='w-[50%]'>
                    <div className='header '>Breathtaking visuals that captivate.</div>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Phrase2