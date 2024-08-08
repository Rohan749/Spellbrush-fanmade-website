import React, { useEffect, useRef } from 'react'
import gsap from "gsap"


const Phrase1 = () => {

    useEffect(() => {
        gsap.fromTo(
          '.section2',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.section2',
              start: 'top 50%',
              end: 'top -20%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }, []);


    return (
        <div className='wrapper '>
            <div className='h-[90vh] w-[100%] flex justify-between items-center section2 text-[#403c53]'>
                <div className='w-[50%]'>
                    <div className='header '>Elevate creativity with our advanced AI tools.</div>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Phrase1