import React from 'react';
import AvailabilityCard from './AvailabilityCard';
import { type AppStatus } from './AvailabilityBox';
import './AvailabilitySection.scss';

// Define the structure for the API-ready data
interface CardData {
  title: string;
  apps: AppStatus[];
}

interface SectionData {
  heading: string;
  cards: CardData[];
}

const AvailabilitySection: React.FC = () => {
  // Now using AppStatus through the interfaces above
  const sections: SectionData[] = [
    {
      heading: "Availability status of Tier-1 Applications",
      cards: [
        {
          title: "Core Services",
          apps: [
            { id: 1, title: 'Associate', percent: '100%', target: '95% targeted', status: 'Good', type: 'success' }
          ]
        }
      ]
    },
    {
      heading: "Availability status of experiences",
      cards: [
        {
          title: "Digital & store",
          apps: [
            { id: 2, title: 'Associate', percent: '100%', target: '95% targeted', status: 'Good', type: 'success' },
            { id: 3, title: 'Shop', percent: '0.0%', target: '85% targeted', status: 'Warning', type: 'warning' },
            { id: 4, title: 'Post purchase', percent: '100%', target: '95% targeted', status: 'Good', type: 'success' },
            { id: 5, title: 'Reliability', percent: '99.8%', target: '95% targeted', status: 'Good', type: 'success' },
            { id: 6, title: 'Loyality & Reliability', percent: '99.8%', target: '95% targeted', status: 'Good', type: 'success' },
          ]
        },
        {
          title: "Common services",
          apps: [
            { id: 7, title: 'Associate', percent: '100%', target: '95% targeted', status: 'Good', type: 'success' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="availability-wrapper">
      {sections.map((section, idx) => (
        <section key={idx} className="availability-section">
          <h2 className="section-heading">{section.heading}</h2>
          <div className="cards-wrapper">
            {section.cards.map((card, cIdx) => (
              <AvailabilityCard 
                key={`${idx}-${cIdx}`} 
                title={card.title} 
                items={card.apps} 
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AvailabilitySection;