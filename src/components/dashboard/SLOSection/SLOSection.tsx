import { ChevronDown } from 'lucide-react';
import { SLOSubSection } from './SLOSubSection';
import SLOCard from './SLOCard';
import styles from './SLOSection.module.scss';

const SLOSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainHeader}>
        <h2>SLO breaches</h2>
        <div className={styles.refresh}>
          Refresh 1 minute <ChevronDown size={14} />
        </div>
      </div>

      <div className={styles.contentBody}>
        {/* Sub Section 1 */}
        <SLOSubSection title="CCE Digital & Store - Shop Marketplace">
          <SLOCard 
            status="alert" 
            label="Accessibility" 
            category="Marketplace" 
            value="0.5%" 
            target="80.01%" 
          />
          <SLOCard 
            status="alert" 
            label="Accessibility" 
            category="Marketplace" 
            value="0.5%" 
            target="80.01%" 
          />
        </SLOSubSection>

        {/* Sub Section 2 */}
        <SLOSubSection title="CCE Digital & Store - Fulfillment">
          <SLOCard 
            status="warning" 
            label="Latency" 
            category="Checkout" 
            value="1.2s" 
            target="< 500ms" 
          />
        </SLOSubSection>
      </div>
    </section>
  );
};

export default SLOSection;