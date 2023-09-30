import type { FC } from 'react'
import type { ButtonProps } from './Button'

import Button from './Button'

import style from './CustomButton.module.scss'


interface Props {
  buttonStyle?: "primary" | "secondary" | "ghost"
}


const CustomButton: FC<Props & ButtonProps> = ({ className, buttonStyle = "primary", children, ...props }) => {
  const baseStyle = style[`button_${buttonStyle}`]

  if (className) {
    className = `${baseStyle} ${className}`
  } else {
    className = baseStyle
  }

  return <Button className={className} {...props}>{children}</Button>
}

export const PrimaryButton: FC<ButtonProps> = (props) => <CustomButton buttonStyle="primary" {...props} />
export const SecondaryButton: FC<ButtonProps> = (props) => <CustomButton buttonStyle="secondary" {...props} />
export const GhostButton: FC<ButtonProps> = (props) => <CustomButton buttonStyle="ghost" {...props} />

export default CustomButton
