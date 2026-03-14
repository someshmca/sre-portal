import React from 'react';
import AvailabilityBox, { type AppStatus } from './AvailabilityBox';

interface CardProps {
  items: AppStatus[];
}

const AvailabilityCard: React.FC<CardProps> = ({ items }) => {
  return (
    <div className="availability-card">
      <div className="boxes-grid">
        {items.map((item) => (
          <AvailabilityBox key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AvailabilityCard;