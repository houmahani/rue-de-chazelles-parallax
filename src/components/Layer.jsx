import { useEffect, useRef, useState } from 'react'
import { LinearFilter } from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Layer = ({ texture, position, opacity, scale, mouse }) => {
  const meshRef = useRef()
  const [aspect, setAspect] = useState(1)
  const map = useTexture(texture)

  map.minFilter = LinearFilter
  map.magFilter = LinearFilter

  useEffect(() => {
    const { width, height } = map.image
    setAspect(width / height)
  }, [map])

  useFrame(() => {
    if (meshRef.current) {
      const depthFactor = position.z * 0.2
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
      <meshBasicMaterial
        map={map}
        transparent
        opacity={opacity}
        premultipliedAlpha={false}
        alphaTest={0.1}
      />
    </mesh>
  )
}

export default Layer
