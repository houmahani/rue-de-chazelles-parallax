import { useEffect, useRef } from 'react'

const useParallax = (canvasHeight = window.innerHeight * 0.9) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { innerWidth } = window
      const yOffset = isMobile ? -0.6 : -1
      const sensitivityY = isMobile ? 0.6 : 1

      mouse.current.x = (event.clientX / innerWidth) * 2 - 1
      mouse.current.y =
        ((event.clientY / canvasHeight) * 2 + yOffset) * sensitivityY
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [canvasHeight, isMobile])

  return mouse
}

export default useParallax
