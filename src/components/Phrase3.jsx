import React, { useEffect, useRef } from 'react'
import gsap from "gsap"


const Phrase3 = () => {

    useEffect(() => {
        gsap.fromTo(
          '.section4',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.section4',
              start: 'top 50%',
              end: 'top -20%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }, []);
    return (
        <div id='endTrigger' className='wrapper'>
            <div className='h-[90vh] w-[100%] section4 flex justify-between items-center text-[#403c53]'>
                <div className='w-[50%]'>
                    <div className='header '>Perfect balance of challenge and fun.</div>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Phrase3