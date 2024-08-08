import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Feature2 = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, [])


  return (
    <div className='wrapper bg-[#fff] flex flex-col items-center text-[#16171d]'>
            <div className='xl:w-[50vw] py-10'  data-aos="fade" data-aos-anchor-placement="top-center" >
                <div className='header xl:text-right pb-5'>Collaborative  <br/> Creation</div>
                <div className='flex flex-col items-start'>
                    <div className='subtitle xl:w-[80%] xl:text-right text-[#666666]'> 
                    We believe that the best art comes from collaboration. Our AI tools are developed to work alongside human artists, helping them to create masterpieces that are greater than the sum of their parts.
                    <div className='flex xl:justify-end items-center py-5 text-white'>
                        <button>Know more</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Feature2