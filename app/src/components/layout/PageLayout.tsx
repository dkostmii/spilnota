import type { FC, PropsWithChildren } from "react";

import { Outlet } from 'react-router-dom'

import Header from "./Header";
import Footer from "./Footer";

import Loader from '@components/screens/Loader'

import styles from './PageLayout.module.scss'


const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.page_layout}>
      <Loader />
      <Header />
      <div className={styles.page_content}>
        <Outlet />
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
