import React, { useRef } from 'react'
import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/8k_earth_clouds.jpg";
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Stars } from '@react-three/drei';

import * as THREE from "three"

import { OrbitControls } from "@react-three/drei"

const Earth = () => {

  const [colorMap, normalMap, specularMap, coludsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  const earthRef = useRef();
  const cloudRef = useRef();
  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   earthRef.current.rotation.y = elapsedTime;
  //   cloudRef.current.rotate.y = elapsedTime;
  // })
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      <Stars radius={300} depth={60} count={20000} factor={7} fade={true} saturation={0} />
      <mesh ref={cloudRef}>
        <sphereBufferGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={coludsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />

      </mesh>

      <mesh ref={earthRef}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          // enableZoom={true}
          enableRotate={true}
          enablePan={true}
          // zoomSpeed={0.5}
          metalness={0.4}
          roughness={0.7}
          rotateSpeed={0.5}
        />
      </mesh>

    </>
  )
}

export default Earth 