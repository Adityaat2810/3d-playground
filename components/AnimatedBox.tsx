import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export const AnimatedBox = () => {
    const meshRef = useRef(null)  // mesgRef is refering to mesh
    /**
     * a hook in React Three Fiber that allows you to run
     *  code on every frame of the render loop
     */
    useFrame(() => {
        console.log(`hii `)
        meshRef.current.rotation.x += 0.01
    })

    return (
        <mesh ref={meshRef} scale={[1, 1, 1]}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    )

}