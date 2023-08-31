import React from 'react'
import CameraRig from './CameraRig'
import BAckground from './BAckground'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, CameraControls } from '@react-three/drei';
import Shirt from './Shirt'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../store';
function Rotate(props){
const ref =useRef();
const snap =useSnapshot(state);
useFrame((state)=>

 snap.intro? ref.current.rotation.y=state.clock.elapsedTime : ref.current.rotation.y=ref.current.rotation.y)
 //changr the color of the cacumaliflight 
return <group ref={ref} {...props} />

}

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 0, 8], fov: 30 }}
      className="w-full max-w-full h-full transition-all ease-in bg-yellow-100"
      
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="sunset"  />
      
      
<CameraControls  maxPolarAngle={Math.PI/2 } minPolarAngle={Math.PI / 2}/>
<BAckground lightcolor="yellow" />
<CameraRig>
        
        <Center>
           <Rotate position-y={0} scale={4}>
            
          <Shirt />
          </Rotate>
         
        </Center>
      </CameraRig>

      
    </Canvas>
  )
}

export default CanvasModel