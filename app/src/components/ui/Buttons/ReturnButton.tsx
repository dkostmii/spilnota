import type { FC } from 'react'

import { GhostButton } from './CustomButton'

import useWindowSize from '@hooks/useWindowSize'
import breakpoints from '@data/breakpoints.json'
import config from '@/config'

import style from './ReturnButton.module.scss'


const ReturnButton: FC = () => {
  const { width } = useWindowSize(config.resizeDebounceTimeMs)
  const displayText = width > breakpoints.laptop

  return (
    <GhostButton type="link" href="/" className={style.button}>
      {displayText && "Повернутися"}
    </GhostButton>
  )
}

export default ReturnButton
