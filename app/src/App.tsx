import type { FC } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@pages/Home'
import Support from '@pages/Support'
import News from '@pages/News'
import Partners from '@pages/Partners'
import NotFound from '@pages/NotFound'

import PageLayout from '@components/layout/PageLayout'


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
        path: 'news/:id',
        element: <News />
      },
      {
        path: 'partners',
        element: <Partners />,
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
])

const App: FC = () => (
  <RouterProvider router={router} />
);

export default App
