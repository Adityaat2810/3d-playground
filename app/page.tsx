'use client'

import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { AnimatedBox } from 'components/AnimatedBox'
import { CameraOrbitController } from 'components/CameraOrbitController'

export default function Page() {
  const testing = true;

  return (

    <main className='h-full w-full'>
      <Canvas orthographic camera={{left:-5,right:5 , top:5 ,bottom:-5 , zoom:50}}>
        
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[4]} /> : null}
        {/* grid [size, division ] */}
        {testing ? <gridHelper args={[10,10]} /> : null}

        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
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
