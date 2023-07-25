import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Logo3d(props) {
  const { nodes, materials } = useGLTF('/models/logo.gltf')
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={nodes.alkimera.geometry} material={materials.Material} position={[0, 0.04, 0]} scale={2} />
    </group>
  )
}

useGLTF.preload('/models/logo.gltf')
