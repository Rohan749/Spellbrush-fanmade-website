import React, { useEffect, useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import logo from "../../assets/spellbrush.png"
import gsap from "gsap"


const Header = () => {
    const [isOpen, setOpen] = useState(true)

    const togglePosition = () => {
        setOpen(!isOpen);
        gsap.to('.navDrawer', { x: isOpen ? '-80rem' : 0, duration: 1 });
      };

  return (
    <div className='fixed w-[100%] flex items-start justify-center top-0 left-0 bgcontainer'>
        <div className='navbar shadow-sm px-6 py-2 my-5 rounded-full flex items-center justify-between lg:gap-28 backdrop-blur-md w-[90%] xl:w-[fit-content] relative'>
            <div className='subtitle'>
                <img src={logo} alt='Spellbrush' className='h-[5rem] z-20' />
            </div>
            <div className='hidden xl:block'>
                <ul className='flex gap-10'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Games</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>About us</a> </li>
                </ul>
            </div>
            <div className='hidden xl:block'>
                <button>Contact us</button>
            </div>
            <div className='block xl:hidden z-20'>
                <Hamburger onToggle={togglePosition}/>
            </div>
        <div className='pt-[5rem] p-10 navDrawer absolute top-[-1rem] left-[80rem] xl:hidden w-[100vw] h-[100vh] z-10 backdrop-blur-3xl'>
        <ul className=' title  font-bold gap-10 w-[fit-content]'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Games</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>About us</a> </li>
                </ul>
                <div className='pt-10'>
                    <button>Contact us</button>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Header