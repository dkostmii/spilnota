import type { FC } from 'react'

import type { ButtonProps } from './Button'
import Button from './Button'

import style from './SupportPanelButton.module.scss'


const SupportPanelButton: FC<ButtonProps> = ({ className, children, ...props }) => {
  if (className) {
    className = `${style.button} ${className}`
  } else {
    className = style.button
  }

  return (
    <Button className={className} {...props}>{children}</Button>
  )
}

export default SupportPanelButton
