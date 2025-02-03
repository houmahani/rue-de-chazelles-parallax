import { useEffect, useRef } from 'react'

const useParallax = (canvasHeight = window.innerHeight * 0.9) => {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { innerWidth } = window

      mouse.current.x = (event.clientX / innerWidth) * 2 - 1
      mouse.current.y = (event.clientY / canvasHeight) * 2 - 1
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [canvasHeight])

  return mouse
}

export default useParallax
