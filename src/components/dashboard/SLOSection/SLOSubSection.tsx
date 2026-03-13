import React from 'react';
import styles from './SLOSection.module.scss';

interface SLOSubSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SLOSubSection: React.FC<SLOSubSectionProps> = ({ title, children }) => (
  <div className={styles.subSection}>
    <h3 className={styles.subTitle}>{title}</h3>
    <div className={styles.cardGrid}>
      {children}
    </div>
  </div>
);