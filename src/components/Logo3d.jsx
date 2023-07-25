import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { ShaderMaterial, Vector2 } from 'three'

const CustomShaderMaterial = new ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    resolution: { value: new Vector2() }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec3 color = vec3(vUv.y, sin(time + vUv.y), cos(time + vUv.y));
      gl_FragColor = vec4(color, 1.0);
    }
  `
})

export function Logo3d(props) {
  const { nodes, materials } = useGLTF('/models/logo.gltf')
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime();
      CustomShaderMaterial.uniforms.time.value = clock.getElapsedTime();
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={nodes.alkimera.geometry} position={[0, 0.04, 0]} scale={2}>
        <primitive attach="material" object={CustomShaderMaterial} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/logo.gltf')
