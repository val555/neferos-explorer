import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import StarBackground from './components/common/StarBackground';
import Navbar from './components/common/Navbar';
import Breadcrumb from './components/common/Breadcrumb';

// Pages
import HomePage from './pages/HomePage';
import SystemPage from './pages/SystemPage';
import PlanetPage from './pages/PlanetPage';

// Wrapper de contenu pour gérer le padding de la navbar proprement
function ContentWrapper() {
  const location = useLocation();
  // On ne veut pas de padding-top sur la Home car elle est centrée
  const isHome = location.pathname === '/'; 
  
  return (
    // z-10 pour être au dessus des étoiles
    // min-h-screen pour que le fond aille jusqu'en bas
    <div className={`relative z-10 w-full min-h-screen flex flex-col ${isHome ? '' : 'pt-20'}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/system/:systemId" element={<SystemPage />} />
        <Route path="/planet/:planetId" element={<PlanetPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* 1. FOND GLOBAL (Fixe, ne bouge pas, z-0) */}
      <div className="fixed inset-0 z-0 bg-neferos-bg-dark">
        <StarBackground />
      </div>

      {/* 2. UI FIXE (Navbar + Breadcrumb, z-50) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Le Breadcrumb reste fixe à gauche */}
      <Breadcrumb />

      {/* 3. CONTENU (Dans le flux normal, z-10) */}
      <ContentWrapper />

    </BrowserRouter>
  );
}

export default App;
