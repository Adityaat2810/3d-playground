'use client'

import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { AnimatedBox } from 'components/AnimatedBox'
import { CameraOrbitController } from 'components/CameraOrbitController'

export default function Page() {
  const testing = true;

  return (

    <main className='h-full w-full'>
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[4]} /> : null}
        {/* grid [size, division] */}
        {testing ? <gridHelper args={[10,10]} /> : null}

        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </main>
  )
}
