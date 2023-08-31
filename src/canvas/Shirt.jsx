import React, { useRef } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { CameraControls, Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const meshRef = useRef();

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);

    
    if (meshRef.current && !snap.intro) {
      meshRef.current.rotation.y=90;
      const mouseX = (state.mouse.x - 0.5)*0.3 ; 
      meshRef.current.rotation.y = mouseX * Math.PI * 0.3; 
    }
  });

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        ref={meshRef}
        rotateY={100}
      >
        {snap.isLogoTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.28} map={logoTexture} />
        )}
        {snap.isFullTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
