import React, { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const BAckground = ({lightcolor}) => {
  const shadow = useRef();
  const { camera } = useThree();

  const negativePosition = camera.position.clone().multiplyScalar(-1);

  return (
    <AccumulativeShadows
      ref={shadow}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={1000}
      rotation={[Math.PI / 2, 0, 0]}
      position={[5, 0, -2]}
      color={lightcolor}
    >
      
        <RandomizedLight amount={15} radius={9} intensity={10} position={[5, 5, -4]} color="0x00ff00" />
      
    </AccumulativeShadows>
  );
};

export default BAckground;
