import { useHelper } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { BoxHelper } from "three"

type Props={
    isTesting:boolean
}
export const AnimatedBox:React.FC<Props>= ({isTesting}) => {
    const meshRef = useRef(null)  // mesgRef is refering to mesh

    // helper 
    isTesting ?useHelper(meshRef,BoxHelper,""): null
    /**
     * Box helper shows the bounding areas
     */

    /**
     *  useFrame
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