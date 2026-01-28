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
    // MODIFICATION ICI : 
    // Si on est sur la page Planète, on force le fond global en NOIR (bg-black).
    // Sinon, on garde le violet sombre par défaut (bg-neferos-bg-dark).
    // Cela corrige les zones violettes résiduelles (sous le breadcrumb, etc.).
    <div className={`relative w-full min-h-screen text-white overflow-hidden ${isPlanetPage ? 'bg-black' : 'bg-neferos-bg-dark'}`}>
      
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
      {/* 
          Gestion du padding : 
          - Sur la page Planète, on veut du plein écran (px-0) pour que le fond noir touche les bords (Immersion).
          - Sur les autres pages, on garde le padding standard (px-4) pour éviter que le contenu touche les bords.
      */}
      <main className={`relative z-10 w-full min-h-screen pt-0 md:pt-24 pb-10 ${isPlanetPage ? 'px-0' : 'px-4'}`}>
        <Outlet />
      </main>
      
    </div>
  );
};

export default MainLayout;
