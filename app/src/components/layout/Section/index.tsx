import type { FC, PropsWithChildren } from 'react'

import style from './Section.module.scss'

interface Props {
  id: string
  className?: string
}

const Section: FC<Props & PropsWithChildren> = ({ id, className, children }) => (
  <section className={className}>
    <div className={style.anchor_wrapper}>
      <span className={style.anchor} id={id}></span>
    </div>
    { children }
  </section>
)

export default Section
