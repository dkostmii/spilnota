import type { FC } from 'react'

import { useLocation } from 'react-router-dom'

import Logo from '@components/ui/Logo'
import Navigation from '@components/ui/Navigation'

import Contacts from '@components/ui/Contacts'
import Social from '@components/ui/Contacts/Social'

import contactsData from '@data/contacts.json'
import socialData from '@data/social'

import style from './Footer.module.scss'


const Footer: FC = () => {
  const { pathname } = useLocation()

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
  ]

  const isHome = pathname === '/'

  if (!isHome) {
    links.forEach(l => {
      l.href = `/${l.href}`
    })
  }

  const invertClass = (!isHome ? ` ${style.invert}` : '')

  return (
    <footer>
      <div className={`${style.wrapper}${invertClass}`}>
        <div className={`${style.container}${invertClass}`}>
          <a href="/">
            <Logo isDark={isHome} />
          </a>

          <div id="Contacts" className={style.content}>
            <Navigation
              className={style.content_navigation}
              isDark={isHome}
              vertical
              data={links}
              customListClass={style["navigation-list"]} />
            <Contacts className={style.content_contacts} invert={!isHome} {...contactsData} />
            <Social className={style.content_social} dark={isHome} socialNetworks={socialData} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
