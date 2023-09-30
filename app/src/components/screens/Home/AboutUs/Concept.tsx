import type { FC } from 'react'

import Section from '@components/layout/Section'

import sharedStyles from './AboutUs.module.scss'


const Concept: FC = () => (
  <Section className={sharedStyles.concept} id="Concept">
    <div className={sharedStyles.line}></div>
    <div className={sharedStyles["concept-main-text"]}>
      <p className={sharedStyles["concept-text"]}>
        Концепція простору передбачає створення безпечного місця для
        всебічного розвитку молоді задля їх благополучного майбутнього.
      </p>
    </div>
    <div className={sharedStyles.line}></div>
  </Section>
)

export default Concept
