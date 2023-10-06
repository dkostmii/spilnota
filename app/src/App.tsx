import type { FC } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/store';

import Home from '@pages/Home';
import Support from '@pages/Support';
import News from '@pages/News';
import Partners from '@pages/Partners';
import NotFound from '@pages/NotFound';

import PageLayout from '@components/layout/PageLayout';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'support',
        element: <Support />,
      },
      {
        path: 'news/:newsArticleId',
        element: <News />,
      },
      {
        path: 'partners',
        element: <Partners />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App: FC = () => (
  <StoreProvider store={store}>
    <RouterProvider router={router} />
  </StoreProvider>
);

export default App;
