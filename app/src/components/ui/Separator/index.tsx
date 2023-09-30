import type { FC } from 'react'

import style from './Separator.module.scss'

interface Props {
  className?: string
  vertical?: boolean
}


const Separator: FC<Props> = ({ className, vertical = false }) => {
  let baseClassName = style.separator

  if (vertical) {
    baseClassName += ` ${style.vertical}`
  }

  if (!className) {
    className = baseClassName
  } else {
    className = `${baseClassName} ${className}`
  }

  return <div className={className}>&nbsp;</div>
}

export default Separator
