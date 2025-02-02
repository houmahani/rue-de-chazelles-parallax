import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress } from '@react-three/drei'
import Layer from './components/Layer.jsx'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Pane } from 'tweakpane'
import layersData from './utils/layers.json'
import Loader from './components/Loader.jsx'
import Label from './components/Label.jsx'

const App = () => {
  const [layers] = useState(layersData)
  const [enableOrbit, setEnableOrbit] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { progress } = useProgress()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setIsLoaded(true), 300) // Delay for smoother transition
    }
  }, [progress])

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(event.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('pointermove', handleMouseMove)
    return () => window.removeEventListener('pointermove', handleMouseMove)
  }, [])

  useEffect(() => {
    const pane = new Pane()
    const params = { orbitControls: enableOrbit }

    pane
      .addBinding(params, 'orbitControls', { label: 'behind the scene' })
      .on('change', (event) => setEnableOrbit(event.value))

    return () => pane.dispose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="canvas-container">
        <Canvas
          style={{ height: '100vh' }}
          camera={{ position: [0, 0, 1], fov: 75 }}
        >
          <Suspense fallback={<Loader />}>
            {layers.map((layer, i) =>
              layer.visible ? <Layer key={i} {...layer} mouse={mouse} /> : null
            )}
          </Suspense>
          {enableOrbit && <OrbitControls enableZoom={false} />}
        </Canvas>
      </div>
      <Label isLoaded={isLoaded} />
    </>
  )
}

export default App
