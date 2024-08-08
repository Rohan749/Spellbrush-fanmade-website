import Body from "./components/Body"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from "react"
import { useGSAP } from '@gsap/react';

function App() {

  gsap.registerPlugin(ScrollTrigger)


  useLayoutEffect(() => {

  }, [])

  return (
    <>
      <Body />
    </>
  )
}

export default App
