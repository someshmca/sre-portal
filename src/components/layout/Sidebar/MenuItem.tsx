import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Sidebar.module.scss';

interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, hasDropdown }) => (
    <div className={styles.menuItem}>
      <div className={styles.labelGroup}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
      </div>
      {/* Arrow is now a direct child of menuItem */}
      {hasDropdown && <ChevronDown size={16} className={styles.arrow} />}
    </div>
  );