import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen w-full bg-neferos-bg-dark text-white overflow-hidden">
      
      {/* Background avec étoiles (animé ou fixe selon besoin) */}
      <div className="fixed inset-0 z-0 bg-[url('/assets/stars-bg.jpg')] bg-cover opacity-20 pointer-events-none" />
      
      {/* Navigation (Header) - Toujours au dessus */}
      <Header />

      {/* Breadcrumb de navigation (Gauche ou Bas selon device) */}
      <Breadcrumb />

      {/* Contenu principal (Pages) */}
      {/* Modification ici: pt-24 -> pt-4 pour réduire drastiquement l'espace vide en haut */}
      <main className="relative z-10 w-full min-h-screen pt-4 px-4 pb-10 md:pt-24 md:px-8 md:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}
