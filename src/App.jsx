import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Layer from './components/Layer.jsx'
import { useEffect, useRef, useState } from 'react'
import { Pane } from 'tweakpane'
import layersData from './utils/layers.json'

const App = () => {
  const [layers, setLayers] = useState(layersData)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const pane = new Pane()

    layers.forEach((layer, i) => {
      const folder = pane.addFolder({ title: layer.name, expanded: false })

      const params = {
        position: layer.position,
        scale: layer.scale || 1,
        visible: layer.visible,
        opacity: layer.opacity,
      }

      // Position
      folder
        .addBinding(params, 'position', {
          label: 'Position',
          min: -5,
          max: 5,
          step: 0.001,
        })
        .on('change', (event) => {
          setLayers((prevLayers) =>
            prevLayers.map((l, index) =>
              index === i
                ? {
                    ...l,
                    position: {
                      x: event.value.x,
                      y: event.value.y,
                      z: event.value.z,
                    },
                  }
                : l
            )
          )
        })

      // Scale
      folder
        .addBinding(params, 'scale', {
          label: 'Scale',
          min: 0.5,
          max: 3,
          step: 0.01,
        })
        .on('change', (ev) => {
          setLayers((prevLayers) =>
            prevLayers.map((l, index) =>
              index === i ? { ...l, scale: ev.value } : l
            )
          )
        })

      // Visibility Toggle
      folder
        .addBinding(params, 'visible', { label: 'Visible' })
        .on('change', (event) => {
          setLayers((prevLayers) =>
            prevLayers.map((l, index) =>
              index === i ? { ...l, visible: event.value } : l
            )
          )
        })

      // Opacity
      folder
        .addBinding(params, 'opacity', {
          label: 'opacity',
          min: 0,
          max: 1,
          step: 0.05,
        })
        .on('change', (event) => {
          setLayers((prevLayers) =>
            prevLayers.map((l, index) =>
              index === i ? { ...l, opacity: event.value } : l
            )
          )
        })
    })

    return () => pane.dispose()
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(event.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="canvas-container">
      <Canvas
        style={{ height: '100vh' }}
        camera={{ position: [0, 0, 1], fov: 75 }}
      >
        {layers.map((layer, i) =>
          layer.visible ? <Layer key={i} {...layer} mouse={mouse} /> : null
        )}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default App
