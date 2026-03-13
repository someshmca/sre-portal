import MainLayout from './components/layout/MainLayout';
import Sidebar from './components/layout/Sidebar/Sidebar';
import IncidentSection from './components/dashboard/IncidentSection/IncidentSection';
import SLOSection from './components/dashboard/SLOSection/SLOSection';
function App() {
  return (
    <MainLayout 
      sidebar={<Sidebar />}
    >
      <div style={{ padding: '20px' }}>
        <IncidentSection />
        <SLOSection />
      </div>
    </MainLayout>
  );
}

export default App;