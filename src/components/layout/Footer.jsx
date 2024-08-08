import React from 'react'
import spellbrush from "../../assets/SPELLBRUSH.svg"
import logo from "../../assets/spellbrush.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='relative overflow-y-hidden font-[1000] text-[#403c53] '>
            <div className='h-[80vh] xl:h-[95vh] bg-[#16171d] header font-extrabold p-[1rem] xl:p-[3rem]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <a href='#' className='footer_links'>HOME</a>
                        <a href='#' className='footer_links'>OUR GAMES</a>
                        <a href='#' className='footer_links'>FEATURES</a>
                    </div>
                    <div className='title text-right'>
                        <div className='text-sm'>Credits: "Substance Miku" (https://skfb.ly/6q9s9) by keiichiisozaki is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</div>
                        <div>This is a demo website. I do not own any model or images. Taken Inspiration from: Spellbrush </div>
                        <div className='footer_links'>Privacy</div>
                        <div className='footer_links'>Terms and Conditions</div>
                    </div>
                </div>
                    <div className='flex items-center flex-col pt-14 xl:pt-0'>
                        <img src={logo} className='w-[10rem]' />
                       <div className='flex gap-3 text-4xl text-[#f1555e]'>
                        <FaSquareXTwitter/>
                        <FaDiscord/>
                       </div>
                    </div>

                <div className='absolute bottom-0 w-[90vw]  left-1/2 transform -translate-x-1/2 '>
                    <img src={spellbrush} className='footer_links' />
                </div>
            </div>
        </div>
    )
}

export default Footer