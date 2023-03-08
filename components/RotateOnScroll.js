import { useEffect, useState } from 'react'

export default function RotateOnScroll({ children }) {
  const [rotation, setRotation] = useState(0)

  const handleScroll = () => {
    const rotationValue = window.scrollY / 500 % Math.PI;
    setRotation(rotationValue)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ transform: `rotate(${rotation}rad)`}}>
      { children }
    </div>
  )
}
