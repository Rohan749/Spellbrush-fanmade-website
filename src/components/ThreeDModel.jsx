import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei'
import { Model } from '../assets/3d model/Scene'
import { useControls } from 'leva'
import LoadingScreen from './LoadingScreen'


const Loader = () => {
  const { progress } = useProgress();
  return <Html center>
    <div className='bg-[#403c53] h-[100vh] w-[100vw] flex items-center justify-center flex-col'>
      <div className='heading'>
{/* 
    {progress} % */}
      </div>
      <div className="w-full bg-red-700 rounded-full h-2.5 dark:bg-gray-700">
        <div className={`bg-[#f0545d] h-3 rounded-full w-[${progress}]`} ></div>
      </div>

    </div>
  </Html>;
};



const ThreeDModel = () => {


  return (
    <div id='girl-model' className='w-[100vw] h-[100vh]  fixed top-0 bg-transparent outline-dashed xl:block hidden'>
      <Canvas camera={{ fov: 20, near: 10, far: 3500 }}>
        <ambientLight intensity={0.2} />
        <directionalLight directionalLight={0.1} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        {/* <Loader /> */}
        <Environment preset='warehouse' />
        <OrbitControls enablePan={false} enableRotate={false} enableDamping={false} enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default ThreeDModel