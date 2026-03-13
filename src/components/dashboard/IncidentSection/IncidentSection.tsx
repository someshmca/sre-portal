import { ChevronDown } from 'lucide-react';
import IncidentCard from './IncidentCard';
import { useAutoRefresh } from '../hooks/useAutoRefresh';
import styles from './IncidentSection.module.scss';

const IncidentSection = () => {
  useAutoRefresh(60000); // Triggers re-render every 1 min

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>Active P1 & P2</h2>
        <div className={styles.refreshControl}>
          Refresh: 1 min <ChevronDown size={14} />
        </div>
      </div>

      <div className={styles.cardGrid}>
        <IncidentCard 
            priority="P1"
            badgeText="Critical"
            title="The jobs are not triggering in GCP for Credit Dialer"
            summary="Outbound Agents will not be able to work at 8:00 am CT"
            startTime="04/06/2022 8:00 AM Central"
            app="OTS - Item services"
            subApp="Product Inventory Marg & Accuracy"
            commander="John Cole"
        />
        <IncidentCard 
            priority="P1"
            badgeText="Critical"
            title="Payment Gateway Timeout - Region East"
            summary="Customers unable to complete checkout in NY area"
            startTime="04/06/2022 9:15 AM Central"
            app="Checkout-Service"
            subApp="Legacy Payment Bridge"
            commander="Sarah Jenkins"
        />
        <IncidentCard 
            priority="P2"
            badgeText="High"
            title="Slow Response times on Product Details"
            summary="Latency increased by 400ms globally"
            startTime="04/06/2022 10:00 AM Central"
            app="Product-Catalog"
            subApp="Search API"
            commander="Mike Ross"
        />
        </div>
    </section>
  );
};

export default IncidentSection;