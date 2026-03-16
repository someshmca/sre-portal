import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Sidebar from './components/layout/Sidebar/Sidebar';
import AvailabilitySection from './components/dashboard/AvailabilitySection/AvailabilitySection';
import SamplePage from './components/SamplePage'; // Ensure this is created
import IncidentSection from './components/dashboard/IncidentSection/IncidentSection';
import SLOSection from './components/dashboard/SLOSection/SLOSection';
// Create a wrapper component
const Dashboard: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <IncidentSection />
    <SLOSection />
    <AvailabilitySection />
  </div>
);
const App: React.FC = () => {
  return (
    <Router>
      {/* Passing Sidebar as a prop to fix the 'sidebar is missing' error */}
      <MainLayout sidebar={<Sidebar />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* The '/*' allows it to match sub-routes like /shop/sub-1 */}
        <Route path="/:pageId/*" element={<SamplePage />} />
      </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;