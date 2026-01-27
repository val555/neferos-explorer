import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import SystemPage from './pages/SystemPage';
import PlanetPage from './pages/PlanetPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Parent qui applique le Layout à tous ses enfants */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/system/:systemId" element={<SystemPage />} />
          <Route path="/planet/:planetId" element={<PlanetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
