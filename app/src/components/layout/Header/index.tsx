import type { FC } from "react"

import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import useWindowPosition from '@/hooks/useWindowPosition'
import useWindowSize from '@/hooks/useWindowSize'
import config from '@/config'

import Menu from '@img/Menu.svg'
import MenuLight from '@img/MenuLight.svg'

import HeaderMenuPanel from '@components/ui/HeaderMenuPanel'
import Logo from '@components/ui/Logo'
import SupportButton from '@components/ui/Buttons/SupportButton'
import ReturnButton from '@components/ui/Buttons/ReturnButton'
import Navigation from '@components/ui/Navigation'

import Contacts from '@components/ui/Contacts'
import Social from '@components/ui/Contacts/Social'

import PanelSeparator from './PanelSeparator'

import breakpoints from '@data/breakpoints.json'
import contactsData from '@data/contacts.json'
import socialData from '@data/social'

import style from './Header.module.scss'


const Header: FC = () => {
  const scrollPosition = useWindowPosition()
  const { width } = useWindowSize(config.resizeDebounceTimeMs)
  const [showMenu, setShowMenu] = useState(false)

  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const links = [
    {
      title: "Про нас",
      href: "#AboutUs",
    },
    {
      title: "Концепція",
      href: "#Concept",
    },
    {
      title: "Новини",
      href: "#News",
    },
    {
      title: "Партнери",
      href: "#Partners",
    },
    {
      title: "Контакти",
      href: "#Contacts",
    },
  ]

  if (!isHome) {
    links.forEach(l => {
      l.href = `/${l.href}`
    })
  }

  let headerStyle = style.header
  let isDark = isHome

  if (scrollPosition > 0) {
    headerStyle += ` ${style.light} ${style.scroll}`
    isDark = false
  }

  if (!isHome) {
    headerStyle += ` ${style.tint}`
  }

  if (width > breakpoints.laptop) {
    return (
      <header id="header">
        <div className={headerStyle}>
          <a className={style.link} href="/">
            <Logo isDark={isDark} />
          </a>
          <Navigation data={links} isDark={isDark} fullSize />
          {isHome ? <SupportButton /> : <ReturnButton />}
        </div>
      </header>
    )
  }

  let menuIcon = MenuLight

  if (isDark) {
    menuIcon = Menu
  }

  return (
    <header id="header">
      <div className={headerStyle}>
        <a className={style.link} href="/">
          <Logo isDark={isDark} />
        </a>
        <button className={style["btn-menu"]} onClick={() => setShowMenu(true)}>
          <img src={menuIcon} alt="" />
        </button>
        {!isHome && (
          <div className={style["return-btn_wrapper"]}>
            <ReturnButton />
          </div>
        )}
        <HeaderMenuPanel show={showMenu} onClose={() => setShowMenu(false)}>
          <Navigation data={links} isDark vertical="center" fullSize />
          <SupportButton />
          <PanelSeparator />
          <Contacts {...contactsData} />
          <div className={style["social-wrapper"]}>
            <Social compact socialNetworks={socialData} />
          </div>
        </HeaderMenuPanel>
      </div>
    </header>
  )
}

export default Header
