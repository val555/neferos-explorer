import { useLocation, Link, matchPath } from 'react-router-dom';
import galaxyData from '../../data/neferos-data.json';

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  // Détection des routes et récupération des IDs
  const planetMatch = matchPath('/planet/:planetId', path);
  const systemMatch = matchPath('/system/:systemId', path);

  const isPlanetPage = !!planetMatch;
  const isSystemPage = !!systemMatch;

  let systemId = null;

  // Cas 1: On est sur la page système
  if (isSystemPage) {
    systemId = systemMatch.params.systemId;
  }
  // Cas 2: On est sur la page planète -> il faut trouver le système parent
  else if (isPlanetPage) {
    const planetId = planetMatch.params.planetId;
    // Recherche inversée dans les données
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

  const steps = [
    { 
      label: 'Galaxie', 
      active: true, 
      link: '/' 
    },
    { 
      label: 'Système', 
      active: isSystemPage || isPlanetPage, 
      // Le lien est actif si on a un ID et qu'on est sur une page enfant (Planète)
      // Si on est déjà sur la page Système, le lien est optionnel mais utile pour refresh/reset, 
      // ici on le laisse actif tout le temps pour la cohérence visuelle.
      link: systemId ? `/system/${systemId}` : null 
    },
    { 
      label: 'Planète', 
      active: isPlanetPage, 
      link: null // Pas de lien car c'est la page courante
    },
  ];

  return (
    <>
      {/* --- DESKTOP VERSION (Verticale à gauche) --- */}
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-12 pointer-events-none">
        {/* Ligne verticale */}
        <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-white/10 -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center group pointer-events-auto">
            <Link 
              to={step.link || '#'} 
              className={`${step.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
            >
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10
                  ${step.active 
                    ? 'bg-neferos-bg-dark border-neferos-accent shadow-[0_0_10px_#e36bed]' 
                    : 'bg-neferos-bg-dark border-white/20'
                  }
                  ${step.link && !step.active ? 'group-hover:border-white' : ''}
                  ${step.link ? 'hover:scale-110' : ''}
                `}
              >
                {step.active && (
                  <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-neferos-accent" />
                )}
              </div>
            </Link>

            <Link 
               to={step.link || '#'}
               className={`${step.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
            >
              <span 
                className={`ml-4 font-tektur text-xs tracking-[0.2em] uppercase transition-all duration-300 absolute left-4 whitespace-nowrap
                  ${step.active 
                    ? 'opacity-100 translate-x-0 text-white font-bold shadow-black drop-shadow-md' 
                    : 'opacity-0 -translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0'
                  }
                `}
              >
                {step.label}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* --- MOBILE VERSION (Horizontale en bas) --- */}
      {/* pb-12 pour bien espacer du bord bas */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center pb-12 pt-6 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-10 pointer-events-auto relative">
           
           {/* Ligne horizontale */}
           <div className="absolute left-6 right-6 top-[5px] h-0.5 bg-white/10 -z-10" />

           {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2 relative w-12">
              <Link 
                to={step.link || '#'} 
                className={`${step.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
              >
                <div 
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative z-10 bg-neutral-900
                    ${step.active 
                      ? 'border-pink-400 shadow-[0_0_8px_#e36bed]' 
                      : 'border-white/20'
                    }
                  `}
                >
                  {step.active && (
                    <div className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-pink-400" />
                  )}
                </div>
              </Link>
              
              <Link 
                to={step.link || '#'} 
                className={`${step.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
              >
                <span 
                  className={`font-tektur text-[9px] tracking-wider uppercase transition-all duration-300 absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap
                    ${step.active 
                      ? 'text-white font-bold opacity-100' 
                      : 'text-white/40 opacity-70'
                    }
                  `}
                >
                  {step.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
