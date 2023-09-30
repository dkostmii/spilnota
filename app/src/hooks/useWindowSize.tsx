import { useLayoutEffect, useState } from 'react'
import debounceFn from 'lodash.debounce'

function useWindowSize(debounce = 0) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    let updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (debounce > 0) {
      updateSize = debounceFn(updateSize, debounce, { leading: true, trailing: true })
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return windowSize
}

export default useWindowSize
