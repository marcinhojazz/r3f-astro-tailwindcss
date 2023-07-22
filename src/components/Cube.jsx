import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { PlaneGeometry } from 'three';

export default function Cube() {
  return (
    <Canvas>
    <ambientLight />
    <OrbitControls />
      <Box>
        <meshStandardMaterial color="hotpink" />
      </Box>
    </Canvas>
  );
}
