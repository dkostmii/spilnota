import type { FC } from 'react'

import img from '@img'

import style from './Contacts.module.scss'

interface Props {
  phone: string
  email: string
  address: string
  className?: string
  invert?: boolean
}

const linkClass = `hover-link ${style.link}`


const Contacts: FC<Props> = ({ className, phone, email, address, invert = false }) => {
  if (className) {
    className = `${style.container} ${className}`
  } else {
    className = style.container
  }

  const invertClass = invert ? ` ${style.invert}` : ''

  return (
    <div className={className}>
      <h3 className={`${style.title}${invertClass}`}>Контакти</h3>
      <ul className={`${style.list}${invertClass}`}>
        <li className={style.item}>
          <a className={linkClass} href={`tel:${phone}`}>
            <img className={style.icon} src={invert ? img.PhoneIconLight : img.PhoneIcon} alt="" />
            <span className={style.caption}>{phone}</span>
          </a>
        </li>
        <li className={style.item}>
          <a className={linkClass} href={`mailto:${email}`}>
            <img className={style.icon} src={invert ? img.MailIconLight : img.MailIcon} alt="" />
            <span className={style.caption}>{email}</span>
          </a>
        </li>
        <li className={style.item}>
          <a className={linkClass} href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}>
            <img className={style.icon} src={invert ? img.MapMarkerIconLight : img.MapMarkerIcon} alt="" />
            <span className={style.caption}>{address}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
