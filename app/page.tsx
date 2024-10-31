'use client'

import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { AnimatedBox } from 'components/AnimatedBox'
import { CameraOrbitController } from 'components/CameraOrbitController'

const TextedSpheres=()=>{
  /**
   * Scale in Mesh********************************* 
   * Scale in mesh refers to the process of adjusting 
   * the size of a mesh object or particle distribution
   * 
   * {size in x y and z }
   * 
   * **********Position*****************
   * where you want to place partiualar mesh in axis
   */
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5] } position={[-1,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"blue"}/>
      </mesh>

      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry  />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      
      <mesh scale={[0.5, 0.5, 0.5]} position={[1,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      
    </>
    
  )
}
export default function Page() {
  const testing = true;

  return (

    <main className='h-full w-full'>
      <Canvas  camera={{}}>
        
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[4]} /> : null}
        {/* grid [size, division ] */}
        {testing ? <gridHelper args={[10,10]} /> : null}

        <OrbitControls />
        <ambientLight intensity={0.3} />
        <directionalLight color="blue" position={[0, 5, 0]} />

       <TextedSpheres/>
      </Canvas>
    </main>
  )
}

/**
 * Perspective vs Orthogtaphic camera 
 *  a perspective camera simulates how the human eye sees depth,
 *  making objects appear smaller as they get further away, 
 * while an orthographic camera does not have perspective, 
 *  meaning objects maintain their size regardless 
 * of their distance from the camera, which is often used 
 * for creating 2D-like views 
 */
