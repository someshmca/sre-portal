import React, { type ReactNode } from 'react';
import Header from './Header/Header'; // Adjust path if needed
import styles from './MainLayout.module.scss';

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header /> 
      </header>
      
      <div className={styles.body}>
        <aside className={styles.sidebar}>{sidebar}</aside>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;