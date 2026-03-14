import React from 'react';
import AvailabilityCard from './AvailabilityCard';
import { type AppStatus } from './AvailabilityBox';
import './AvailabilitySection.scss';

const AvailabilitySection: React.FC = () => {
  // This array represents the data you will eventually 'fetch' from the API
  const tier1Apps: AppStatus[] = [
    { id: 1, title: 'Associate', percent: '100%', target: '95% targeted', status: 'Good', type: 'success' },
    { id: 2, title: 'Checkout', percent: '92%', target: '98% targeted', status: 'Warning', type: 'warning' },
    { id: 3, title: 'Payment', percent: '88%', target: '99% targeted', status: 'Critical', type: 'danger' },
  ];

  return (
    <section className="availability-section">
      <h2 className="section-heading">Availability status of Tier-1 Applications</h2>
      <div className="cards-wrapper">
        <AvailabilityCard items={tier1Apps} />
      </div>
    </section>
  );
};

export default AvailabilitySection;