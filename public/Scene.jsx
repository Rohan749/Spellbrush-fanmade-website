/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: keiichiisozaki (https://sketchfab.com/keiichiisozaki)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/substance-miku-c82070799db14f2088691e6cd0195001
Title: Substance Miku
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3.422}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.skin_skin_0.geometry} material={materials.skin} />
            <mesh geometry={nodes.skin_eye_0.geometry} material={materials.material} />
          </group>
          <mesh geometry={nodes.emerald001_emerald_0.geometry} material={materials.emerald} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.skin002_skin_0.geometry} material={materials.skin} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.twintail000_hair_0.geometry} material={materials.hair} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.bangs_hair_0.geometry} material={materials.hair} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.cloth003_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube002_acce_0.geometry} material={materials.acce} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.hair_hair_0.geometry} material={materials.hair} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.face_eye_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.face001_spec_0.geometry} material={materials.spec} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cube001_acce_0.geometry} material={materials.acce} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.emerald_emerald_0.geometry} material={materials.emerald} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane010_skin_0.geometry} material={materials.skin} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane007_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane005_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane001_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.tie_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane004_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane003_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane002_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Plane_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
