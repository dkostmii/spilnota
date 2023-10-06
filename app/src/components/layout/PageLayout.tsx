import type { FC, PropsWithChildren } from 'react';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Loader from '@components/ui/Loader';

import styles from './PageLayout.module.scss';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      window.scrollTo(0, 0);
    }
  }, [isHome]);

  return (
    <div className={styles.page_layout}>
      <Loader />
      <Header />
      <div className={styles.page_content}>
        <Outlet />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
