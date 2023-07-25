import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Cube from './Cube';
import { Suspense } from 'react';
import { Logo3d } from './Logo3d';

export default function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{position : [4.1, 4.2, 4.3]}} shadows>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Cube />
          <Logo3d />
        </Canvas>
      </Suspense>
    </>
  );
}
