import type { FC, HTMLProps } from 'react'

import assertUnreachable from '@/helpers/assertUnreachable'

type LinkButtonProps = { type: "link" } & HTMLProps<HTMLAnchorElement>
type RegularButtonProps = { type: "button" | undefined } & HTMLProps<HTMLButtonElement>

export type ButtonProps = LinkButtonProps | RegularButtonProps


const Button: FC<ButtonProps> = ({ children, ...props }) => {
  if (!props.type) {
    props.type = "button"
  }

  switch (props.type) {
    case "link":
      return (
        <a {...props}>{children}</a>
      )
    case "button":
      return (
        <button {...props}>{children}</button>
      )
    default:
      assertUnreachable(props.type)
  }
}

export default Button
