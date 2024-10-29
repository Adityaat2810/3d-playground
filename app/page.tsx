'use client'

import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

export default function Page() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>

    </>
  )
}
