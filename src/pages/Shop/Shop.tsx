import styles from './Shop.module.scss';
import shopData from '../../data/shopData.json';

const Shop = () => {
  return (
    <div className={styles.shopContainer}>
      <header className={styles.pageHeader}>
        <h1>{shopData.pageTitle}</h1>
      </header>

      <div className={styles.contentGrid}>
        {shopData.systems.map((system) => (
          <div key={system.id} className={`${styles.systemCard} ${styles[system.type]}`}>
            <div className={styles.cardHeader}>
              <span className={styles.systemName}>{system.name}</span>
              <span className={styles.availability}>
                Availability <span className={styles.boldValue}>{system.availability}%</span>
              </span>
            </div>
            <div className={styles.cardContent}>
              {system.metrics.map((metric, idx) => (
                <div key={idx} className={`${styles.statusBox} ${styles[metric.status]}`}>
                  <div className={styles.metricLabel}>{metric.label}</div>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricTarget}>{metric.target}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;