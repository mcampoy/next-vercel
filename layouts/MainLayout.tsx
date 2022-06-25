
import { FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import styles from './MainLayuot.module.css';

type Props = {
  children: React.ReactNode;
}

export const MainLayout: FC <Props> = ({ children }) => {
  return (
   <div className={styles.container}>
      <Head>
        <title>Home - Matías</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>
   </div>
  )
};
