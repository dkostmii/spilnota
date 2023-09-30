import type { FC } from 'react'

import useWindowSize from '@hooks/useWindowSize'
import breakpoints from '@data/breakpoints.json'
import config from '@/config'

import img from "@img"

import styles from './Logo.module.scss'

interface Props {
  isDark?: boolean
}

const Logo: FC<Props> = ({ isDark = false }) => {
  const { width } = useWindowSize(config.resizeDebounceTimeMs)

  let logoImg = img.LogoLight

  if (isDark && width < breakpoints.tablet) {
    logoImg = img.LogoSmall
  } else if (width < breakpoints.tablet) {
    logoImg = img.LogoSmallLight
  } else if (isDark) {
    logoImg = img.Logo
  }

  return <img src={logoImg} alt="" className={styles.logo} />
}

export default Logo
