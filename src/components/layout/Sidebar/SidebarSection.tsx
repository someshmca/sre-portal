import React from 'react';
import styles from './Sidebar.module.scss';

interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => (
  <div className={styles.section}>
    {title && <h3 className={styles.sectionTitle}>{title}</h3>}
    <div className={styles.sectionContent}>{children}</div>
  </div>
);