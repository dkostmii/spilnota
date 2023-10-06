import type { FC } from 'react';

import { useGetNewsQuery } from '@store/services/news';

import Section from '@components/layout/Section';
import NewsSlider from '@/components/ui/NewsSlider';
import InlineLoader from '@components/ui/Loader/InlineLoader';

import style from './News.module.scss';

const News: FC = () => {
  const { data, error, isLoading } = useGetNewsQuery();

  if (error) {
    throw new Error('Unable to load data');
  }

  if (!isLoading && !error && !data) {
    throw new Error('Unable to load data');
  }

  if (!isLoading && data.length < 1) {
    return null;
  }

  return (
    <Section className={style.News} id="News">
      <h2 className="section-title">Новини</h2>
      {isLoading ? <InlineLoader /> : <NewsSlider data={data} />}
    </Section>
  );
};

export default News;
