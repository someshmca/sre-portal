import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import styles from './SLOSection.module.scss';

interface SLOCardProps {
  status: 'alert' | 'warning' | 'success';
  label: string;
  category: string;
  value: string;
  target: string;
}

const SLOCard: React.FC<SLOCardProps> = ({ status, label, category, value, target }) => {
  // Map status to specific styles and icons
  const statusConfig = {
    alert: { icon: <AlertCircle size={20} />, class: styles.alert },
    warning: { icon: <AlertTriangle size={20} />, class: styles.warning },
    success: { icon: <CheckCircle2 size={20} />, class: styles.success },
  };

  const config = statusConfig[status];

  return (
    <div className={`${styles.card} ${config.class}`}>
      {/* 20% Division */}
      <div className={styles.sideBar}>
        {config.icon}
        <span className={styles.sideText}>{label}</span>
      </div>
      
      {/* 80% Division */}
      <div className={styles.mainInfo}>
        <p className={styles.category}>{category}</p>
        <p className={styles.value}>{value}</p>
        <p className={styles.target}>{target} Targeted</p>
      </div>
    </div>
  );
};

export default SLOCard;