import React, { useEffect, useRef } from 'react'
import Header from './layout/Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Phrase1 from './Phrase1'
import Phrase2 from './Phrase2'
import Phrase3 from './Phrase3'
import OurGames from './OurGames'
import Features from './Features'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Footer from './layout/Footer'
import ThreeDModel from './ThreeDModel'
import gsap from "gsap"
import BgContainer from './BgContainer'

const Body = () => {

    return (
        <div className='overflow-x-hidden'>
            <BgContainer />
            <ThreeDModel />
            <div className='z-50 relative'>
            <Header />
            </div>
            <Hero />
            <AboutUs />
            <div className='z-40 relative'>
                <div className='xl:block hidden'>
                    <Phrase1 />
                    <Phrase2 />
                    <Phrase3 />
                </div>
                <OurGames />
                <Features />
                <Feature1 />
                <Feature2 />
            </div>
            <div className='z-50 relative'>

                <Footer />
            </div>
        </div>
    )
}

export default Body