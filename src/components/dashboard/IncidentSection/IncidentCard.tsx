import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import styles from './IncidentSection.module.scss';

interface IncidentCardProps {
  priority: 'P1' | 'P2';
  badgeText: 'Critical' | 'High';
  title: string;
  summary: string;
  startTime: string;
  app: string;
  subApp: string;
  commander: string;
}

const IncidentCard: React.FC<IncidentCardProps> = (props) => {
  const isP1 = props.priority === 'P1';

  return (
    <div className={`${styles.card} ${isP1 ? styles.p1Card : styles.p2Card}`}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.priorityText}>{props.priority}</span>
          <span className={`${styles.badge} ${isP1 ? styles.critical : styles.high}`}>
            {props.badgeText}
          </span>
        </div>
        <MoreHorizontal className={styles.moreIcon} size={20} />
      </div>

      <div className={styles.cardBody}>
        <p className={styles.mainTitle}>{props.title}</p>
        <p><strong>Summary:</strong> {props.summary}</p>
        <p><strong>Start time:</strong> {props.startTime}</p>
        <div className={styles.appSection}>
          <p><strong>Application:</strong> {props.app}</p>
          <span className={styles.subApp}>{props.subApp}</span>
        </div>
        <p><strong>Incident Commander:</strong> {props.commander}</p>
        
        <div className={styles.links}>
          <a href="https://meet.google.com/abc-defg-hij" target="_blank">Google meet link</a>
          <p className={styles.dialIn}>Dial in: +1 123-456-7890 PIN: 123 456#</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.btnGroup}>
          <button className={styles.btnOutline}>Join Group Chat</button>
          <button className={styles.btnFilled}>Join with Google Meet</button>
        </div>
        <a href="#" className={styles.serviceNowLink}>Review in Service Now</a>
      </div>
    </div>
  );
};

export default IncidentCard;