import type { FC } from 'react'
import { useMemo } from 'react'

import newsData from '@data/news_temp'

import Section from '@components/layout/Section'
import NewsSlider from "@/components/ui/NewsSlider";

import style from './News.module.scss';


const News: FC = () => {
  const data = useMemo(() => new Array(20).fill(newsData[0]), [])

  return (
    <Section className={style.News} id="News">
      <h2 className="section-title">Новини</h2>
      <NewsSlider data={data} />
    </Section>
  )
}

export default News
