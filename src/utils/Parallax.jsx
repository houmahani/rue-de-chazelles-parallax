import { useEffect, useRef } from 'react'

const useParallax = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!isMobile) {
      const handlePointerMove = (event) => {
        const { innerWidth, innerHeight } = window
        mouse.current.x = (event.clientX / innerWidth) * 2 - 1
        mouse.current.y = (event.clientY / innerHeight) * 2 - 1
      }
      window.addEventListener('pointermove', handlePointerMove)
      return () => window.removeEventListener('pointermove', handlePointerMove)
    } else {
      const handleDeviceMove = (event) => {
        const { beta, gamma } = event // Beta = front/back tilt, Gamma = left/right tilt
        mouse.current.x = Math.max(-1, Math.min(1, gamma / 30)) // Normalize movement (-1 to 1)
        mouse.current.y = Math.max(-1, Math.min(1, beta / 30))
      }
      window.addEventListener('deviceorientation', handleDeviceMove, true)
      return () =>
        window.removeEventListener('deviceorientation', handleDeviceMove)
    }
  }, [isMobile])

  return mouse
}

export default useParallax
