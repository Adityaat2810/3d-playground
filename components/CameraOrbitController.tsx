import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { OrbitControls } from 'three-stdlib'

export const CameraOrbitController = () => {
    // camera and global object frm useThree hook
    const { camera, gl } = useThree()
    useEffect(() => {
        const controls = new OrbitControls(
            camera, gl.domElement
        )

        // cleanup function 
        return () => {
            controls.dispose();
        }
    }, [camera, gl])

    return null;
}

/**
 * Perspective Camera => like eyes
 * StereoCamera => 
 */