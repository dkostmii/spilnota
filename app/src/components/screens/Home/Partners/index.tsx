import type { FC } from 'react'

import { useMemo } from 'react'

import partnersData from '@data/partners_temp'

import Section from '@components/layout/Section'

import PartnersList from "@components/ui/Partners/List";
import PartnersButtons from "@components/ui/Partners/Buttons"

import style from './Partners.module.scss'


const Partners: FC = () => {
  const data = useMemo(() => new Array(20).fill(partnersData[0]), [])

  return (
    <Section id="Partners">
      <h2 className="section-title">Наші партнери</h2>
      <div className={style.container}>
        <PartnersList data={data} />
        <PartnersButtons />
      </div>
    </Section>
  )
}

export default Partners
