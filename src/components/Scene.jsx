import React, { ComponentProps, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import fragment from "!!raw-loader!./shader2.frag";
import vertex from "!!raw-loader!./shader.vert";

// ... rest of your code ...

export default function Scene() {
  return (
    <>
      <Canvas gl={{ localClippingEnabled: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <spotLight intensity={0.6} position={[2, -2, -3]} />

        <Planet scale={[2.6, 2.5, 2.5]} position={[0, 9.5, -15]} />
        <Ground position-y={-2.5} rotation-x={-0.2} />

        <Background />

        <PerspectiveCamera position={[0, 0, 10]} />

        {/* <OrbitControls /> */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
      <div className="logo">
        <img
          alt="Astro Logo"
          src="https://astro.build/assets/press/simple-logomark-dark.svg"
        />
      </div>
    </>
  );
}
