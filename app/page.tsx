'use client'

import { Canvas } from '@react-three/fiber'
import { AnimatedBox } from 'components/AnimatedBox'
import { useRef } from 'react'


export default function Page() {

  return (
    
    <main className='h-full w-full'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <AnimatedBox/>
      </Canvas>
      </main>
  )
}
