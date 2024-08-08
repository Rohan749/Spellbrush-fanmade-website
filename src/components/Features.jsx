import React from 'react'
import Cards from './common/cards'
import visuals from "../assets/1.png"
import story from "../assets/2.png"
import game from "../assets/3.png"

const features = [
    {
        img: story,
        title: "Immersive Storytelling",
        description: "Experience captivating narratives and character arcs that draw you into the world of niji・journey."
    },
    {
        img: visuals,
        title: "Stunning Visuals",
        description: "Enjoy beautifully crafted visuals that showcase the best of anime art styles."
    },
    {
        img: game,
        title: "Innovative Gameplay",
        description: "Engage with unique gameplay mechanics that offer a fresh and exciting experience."
    },
]

const Features = () => {
  return (
    <div className='wrapper bg-[#fff]'>
        <div className='header text-[#16171d]'>Game Features</div>
            <div className='min-h-[100vh] w-[100%] grid xl:grid-cols-1 gap-16 text-[#16171d] mt-10'>
                {features.map((feature, index) => {
                    return <div key={feature.title}>
                        <Cards index={index} title={feature.title} img={feature.img} description={feature.description} /> 
                    </div>
                })}
            </div>
        </div>
  )
}

export default Features