import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Galaxie', href: '/' },
  { name: 'À Propos', href: '/about' }, // Exemple de page future
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50 w-full bg-neferos-bg-surface backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* 1. Bouton Menu Mobile (Hamburger) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neferos-accent"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* 2. Logo & Liens Desktop */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Neferos Explorer"
                  src="/images/logo-neferos.png"
                  className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Liens (Desktop seulement) */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors font-tektur tracking-wider uppercase
                        ${isActive 
                          ? 'bg-neferos-accent/20 text-white shadow-[0_0_10px_rgba(164,0,192,0.3)]' 
                          : 'text-neferos-text-pink hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Espace vide à droite (ou bouton futur) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Vide pour l'instant, garde l'équilibre */}
          </div>
        </div>
      </div>

      {/* 4. Menu Mobile (Dépliant) */}
      {isOpen && (
        <div className="sm:hidden bg-neferos-bg-dark border-b border-white/10">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => {
               const isActive = location.pathname === item.href;
               return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)} // Ferme le menu au clic
                  className={`block rounded-md px-3 py-2 text-base font-medium font-tektur uppercase tracking-widest
                    ${isActive 
                      ? 'bg-neferos-accent/20 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item.name}
                </Link>
               );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
