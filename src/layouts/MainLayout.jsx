import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Breadcrumb from '../components/layout/Breadcrumb';
import StarBackground from '../components/background/StarBackground';

const MainLayout = () => {
  return (
    <div className="relative w-full min-h-screen bg-neferos-bg-dark text-white overflow-hidden">
      
      {/* 1. FOND (Layer 0) - Fixe */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarBackground />
      </div>

      {/* 2. UI NAVIGATION (Layer 50) - Fixe */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 3. BREADCRUMB (Layer 40) - Fixe */}
      <div className="fixed top-20 left-4 z-40">
        <Breadcrumb />
      </div>

      {/* 4. ZONE DE CONTENU (Layer 10) - Scrollable */}
      {/* pt-24 compense la hauteur de la navbar + breadcrumb */}
      <main className="relative z-10 w-full min-h-screen pt-24 px-4 pb-10">
        <Outlet />
      </main>
      
    </div>
  );
};

export default MainLayout;
