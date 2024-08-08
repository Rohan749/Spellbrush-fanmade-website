import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import img from "../assets/group.png"
import AOS from "aos";
import "aos/dist/aos.css";

const OurGames = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className=' wrapper bg-[#16171D] '>
            <div className='h-[100vh] w-[100%] games flex xl:flex-row flex-col gap-10 xl:justify-between items-center'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center"  className='xl:w-[55%]  section5'>
                    <div className='header '>Our Games</div>
                    <div className='title my-4'>niji・journey</div>
                    <div className='title my-4'>niji・journey is our flagship project, a game that combines our love for anime with our expertise in generative AI. It's a testament to what can be achieved when technology and artistry come together seamlessly.</div>
                </div>
                <div data-aos="fade" data-aos-anchor-placement="top-center" data-aos-delay="100" className=''>
                    <div className=' section5 max-w-[35rem]'>
                        <img src={img} alt='NIJI' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurGames