import React from 'react';
import { useLocation } from 'react-router-dom';

const SamplePage: React.FC = () => {
  const location = useLocation();
  // Cleans the path, e.g., "/shop/sub-1" -> "Shop / Sub 1"
  const pageName = location.pathname
    .substring(1)
    .replace(/\//g, ' / ')
    .replace(/-/g, ' ');

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', textTransform: 'capitalize', color: '#0f172a' }}>
        Welcome to the {pageName || 'Dashboard'} Screen
      </h1>
      <p style={{ color: '#64748b', marginTop: '16px', fontSize: '16px' }}>
        This module is ready for API data binding.
      </p>
    </div>
  );
};

export default SamplePage;