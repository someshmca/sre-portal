import React from 'react';
import AvailabilityBox, { type AppStatus } from './AvailabilityBox';

interface CardProps {
  title: string;
  items: AppStatus[];
}

const AvailabilityCard: React.FC<CardProps> = ({ title, items }) => {
  return (
    <div className="availability-card">
      <h3 className="card-group-title">{title}</h3>
      <div className="boxes-grid">
        {items.map((item) => (
          <AvailabilityBox key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AvailabilityCard;