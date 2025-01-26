import { useTexture } from '@react-three/drei'
import { useEffect, useState } from 'react'

const Layer = ({ texture, position, opacity, scale }) => {
  const map = useTexture(texture)
  const [aspect, setAspect] = useState(1)

  useEffect(() => {
    const { width, height } = map.image
    setAspect(width / height)
  }, [map])

  return (
    <mesh
      position={[position.x, position.y, position.z]}
      scale={[aspect * scale, scale, scale]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={map} transparent opacity={opacity} />
    </mesh>
  )
}

export default Layer
