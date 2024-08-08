import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Feature1 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])


    return (
        <div  className='wrapper bg-[#fff] flex flex-col items-center text-[#16171d] '>
            <div data-aos="fade" data-aos-anchor-placement="top-center" className='xl:w-[50vw] pt-10 '>
                <div className='header pb-5 '>AI-Powered <br/> Artistry</div>
                <div className='flex flex-col items-end'>
                    <div className='subtitle xl:w-[80%] text-[#666666]'> 
                    At Spellbrush, we are exploring how AI can enhance the creative process for artists. Our tools are designed to assist artists in achieving their vision, providing them with new ways to express their creativity.
                    <div className='flex items-center py-5 text-white'>
                        <button>Know more</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Feature1