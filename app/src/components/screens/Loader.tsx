import type { FC } from 'react'
import { useState, useEffect } from 'react'
import DotLoader from 'react-spinners/DotLoader'

import style from './Loader.module.scss'


const Loader: FC = () => {
  const [loaded, setLoaded] = useState(false)
  const [render, setRender] = useState(true)

  useEffect(() => {
    const loadedHandler = () => setLoaded(true)

    window.addEventListener('load', loadedHandler)
    const timeout = setTimeout(() => setRender(false), 320)

    return () => {
      window.removeEventListener('load', loadedHandler)
      clearTimeout(timeout)
    }
  }, [])

  if (!render) {
    return null
  }

  let overlayClass = style.overlay

  if (loaded) {
    overlayClass += ` ${style.hide}`
  }

  return (
    <div className={overlayClass}>
      <DotLoader
        color="#603790"
        loading={!loaded} />
    </div>
  )
}

export default Loader
