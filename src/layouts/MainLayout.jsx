import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Breadcrumb from '../components/layout/Breadcrumb';
import StarBackground from '../components/background/StarBackground';

const MainLayout = () => {
  const location = useLocation();
  // On masque les étoiles HTML globales uniquement sur la page Planète
  // car elle possède son propre fond étoilé 3D (Three.js)
  const isPlanetPage = location.pathname.includes('/planet/');

  return (
    <div className="relative w-full min-h-screen bg-neferos-bg-dark text-white overflow-hidden">
      
      {/* 1. FOND (Layer 0) - Fixe */}
      {/* Rendu conditionnel : Pas d'étoiles CSS sur la page Planète */}
      {!isPlanetPage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarBackground />
        </div>
      )}

      {/* 2. UI NAVIGATION (Layer 50) - Fixe */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 3. BREADCRUMB (Layer 40) - Position gérée par le composant lui-même */}
      <Breadcrumb />

      {/* 4. ZONE DE CONTENU (Layer 10) - Scrollable */}
      {/* Mobile: pt-0 (le contenu gère son espacement) / Desktop: pt-24 (espace pour header + breadcrumb) */}
      <main className="relative z-10 w-full min-h-screen pt-0 md:pt-24 px-4 pb-10">
        <Outlet />
      </main>
      
    </div>
  );
};

export default MainLayout;
