import type { FC } from 'react';

import NewsArticle from '@components/screens/News/NewsArticle';
import RetryFetch from '@components/ui/RetryFetch';

const News: FC = () => (
  <RetryFetch>
    <NewsArticle />
  </RetryFetch>
);

export default News;
