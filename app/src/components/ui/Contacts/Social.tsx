import type { FC } from 'react'

import style from './Contacts.module.scss'


interface IconsData {
  default: string
  light: string
  circle: string
}

interface SocialNetworkItem {
  url: string
  caption: string
  icons: IconsData
}

interface SocialItemProps {
  url: string
  caption?: string
  iconUrl: string
}

interface Props {
  socialNetworks: SocialNetworkItem[]
  className?: string
  dark?: boolean
  compact?: boolean
}


const linkClass = `hover-link ${style.link}`


const SocialItem: FC<SocialItemProps> = ({ url, caption, iconUrl }) => (
  <li className={style.item}>
    <a className={linkClass} href={url}>
      <img className={style.icon} src={iconUrl} alt="" />
      {caption && (
        <span className={style.caption}>{caption}</span>
      )}
    </a>
  </li>
)

const Social: FC<Props> = ({ className, socialNetworks, compact = false, dark = true }) => {
  if (className) {
    className = `${style.container} ${className}`
  } else {
    className = style.container
  }

  let listClass = style.list

  if (compact) {
    listClass += ` ${style.compact}`
  }

  const invertClass = dark ? '' : ` ${style.invert}`
  listClass += invertClass
  className += invertClass

  return (
    <div className={className}>
      {!compact && <h3 className={`${style.title}${invertClass}`}>Соціальні мережі</h3>}
      <ul className={listClass}>
        {socialNetworks.map((s, id) => {
          const { url, caption, icons } = s

          if (compact) {
            return <SocialItem key={id} url={url} iconUrl={icons.circle} />
          }

          return (
            <SocialItem
              key={id}
              url={url}
              caption={caption}
              iconUrl={dark ? icons.default : icons.light } />
          )
        })}
      </ul>
    </div>
  )
}

export default Social
