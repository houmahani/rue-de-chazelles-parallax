import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const cubeRef = useRef();

  // Rotate the cube on every frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      {/* Cube geometry */}
      <boxGeometry args={[1, 1, 1]} />
      {/* Material */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default RotatingCube
