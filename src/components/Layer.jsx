import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

const Layer = ({ texture, position, opacity, scale, mouse }) => {
  console.log(mouse)

  const meshRef = useRef()
  const map = useTexture(texture)
  const [aspect, setAspect] = useState(1)

  useEffect(() => {
    const { width, height } = map.image
    setAspect(width / height)
  }, [map])

  useFrame(() => {
    if (meshRef.current) {
      const depthFactor = position.z * 0
      meshRef.current.position.x = position.x + mouse.current.x * depthFactor
      meshRef.current.position.y = position.y + mouse.current.y * depthFactor
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      scale={[aspect * scale, scale, scale]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={map} transparent opacity={opacity} />
    </mesh>
  )
}

export default Layer
