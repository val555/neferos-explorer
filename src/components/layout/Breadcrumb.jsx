import { useLocation, Link, matchPath } from 'react-router-dom';
import galaxyData from '../../data/neferos-data.json';

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  // --- LOGIQUE DE ROUTING ---
  const planetMatch = matchPath('/planet/:planetId', path);
  const systemMatch = matchPath('/system/:systemId', path);
  const isPlanetPage = !!planetMatch;
  const isSystemPage = !!systemMatch;

  let systemId = null;
  if (isSystemPage) {
    systemId = systemMatch.params.systemId;
  } else if (isPlanetPage) {
    const planetId = planetMatch.params.planetId;
    for (const sector of galaxyData.sectors) {
      for (const system of sector.systems) {
        if (system.planets.find(p => p.id === planetId)) {
          systemId = system.id;
          break;
        }
      }
      if (systemId) break;
    }
  }

  // --- CONFIGURATION DES ÉTAPES ---
  const steps = [
    { 
      id: 'galaxy', 
      label: 'Galaxie', 
      active: true, 
      link: '/' 
    },
    { 
      id: 'system', 
      label: 'Système', 
      active: isSystemPage || isPlanetPage, 
      link: systemId ? `/system/${systemId}` : null 
    },
    { 
      id: 'planet', 
      label: 'Planète', 
      active: isPlanetPage, 
      link: null // Pas de lien (page courante)
    },
  ];

  return (
    <nav aria-label="Breadcrumb">
      
      {/* ====================================================================================
          VERSION DESKTOP
          Correction : Couleurs Pink forcées + CSS unifié (Link vs Div)
      ==================================================================================== */}
      <ol className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-12 pointer-events-none">
        
        {/* Ligne verticale de fond */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10 -z-10" aria-hidden="true" />

        {steps.map((step) => {
          // On choisit la balise : Link si lien, div sinon.
          const Wrapper = step.link ? Link : 'div';
          
          return (
            <li key={step.id} className="relative group pointer-events-auto">
              <Wrapper 
                to={step.link || undefined}
                className={`flex items-center ${step.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* 
                   CERCLE PRINCIPAL 
                   - Grid place-items-center : Centre le point parfaitement.
                   - Couleurs : On utilise pink-500 pour le bord actif pour matcher le mobile.
                */}
                <div 
                  className={`
                    w-4 h-4 rounded-full border-2 
                    grid place-items-center relative z-20 transition-all duration-300
                    ${step.active 
                      ? 'bg-neutral-900 border-pink-400 shadow-[0_0_10px_#e36bed]' 
                      : 'bg-neutral-900 border-white/20'
                    }
                    ${step.link ? 'hover:scale-110' : ''}
                    ${step.link && !step.active ? 'group-hover:border-white' : ''}
                  `}
                >
                  {/* 
                     POINT CENTRAL 
                     - bg-pink-400 : C'est la couleur exacte demandée (plus de noir).
                     - w-1.5 h-1.5 : Taille visible.
                  */}
                  {step.active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_5px_#e36bed]" />
                  )}
                </div>

                {/* LABEL */}
                <span 
                  className={`
                    absolute left-8 
                    font-tektur text-xs tracking-[0.2em] uppercase whitespace-nowrap
                    transition-all duration-300
                    ${step.active 
                      ? 'opacity-100 translate-x-0 text-white font-bold shadow-black drop-shadow-md' 
                      : 'opacity-0 -translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0'
                    }
                  `}
                >
                  {step.label}
                </span>
              </Wrapper>
            </li>
          );
        })}
      </ol>

      {/* ====================================================================================
          VERSION MOBILE (INCHANGÉE & FONCTIONNELLE)
      ==================================================================================== */}
      <ol className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center pb-12 pt-6 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-10 pointer-events-auto relative">
           <div className="absolute left-6 right-6 top-[5px] h-0.5 bg-white/10 -z-10" aria-hidden="true" />

           {steps.map((step) => {
             const Wrapper = step.link ? Link : 'div';
             return (
              <li key={step.id} className="relative w-12 flex justify-center">
                <Wrapper 
                  to={step.link || undefined} 
                  className={`flex flex-col items-center gap-2 ${step.link ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div 
                    className={`
                      w-3 h-3 rounded-full border-2 bg-neutral-900
                      grid place-items-center relative z-10 transition-all duration-300
                      ${step.active ? 'border-pink-400 shadow-[0_0_8px_#e36bed]' : 'border-white/20'}
                    `}
                  >
                    {step.active && (
                      <div className="w-1 h-1 rounded-full bg-pink-400" />
                    )}
                  </div>
                  <span 
                    className={`
                      font-tektur text-[9px] tracking-wider uppercase whitespace-nowrap
                      transition-all duration-300 absolute top-6
                      ${step.active ? 'text-white font-bold opacity-100' : 'text-white/40 opacity-70'}
                    `}
                  >
                    {step.label}
                  </span>
                </Wrapper>
              </li>
            );
          })}
        </div>
      </ol>
    </nav>
  );
}
