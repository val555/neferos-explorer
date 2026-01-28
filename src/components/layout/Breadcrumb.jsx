import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  const isSystemActive = path.includes('/system') || path.includes('/planet');
  const isPlanetActive = path.includes('/planet');

  const steps = [
    { label: 'Galaxie', active: true, link: '/' },
    { label: 'Système', active: isSystemActive, link: null },
    { label: 'Planète', active: isPlanetActive, link: null },
  ];

  return (
    <>
      {/* --- DESKTOP VERSION (Verticale à gauche) --- */}
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-12 pointer-events-none">
        {/* Ligne verticale */}
        <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-white/10 -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center group pointer-events-auto">
            <Link to={step.link || '#'} className={`${step.link ? 'cursor-pointer' : 'cursor-default'}`}>
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10
                  ${step.active 
                    ? 'bg-neferos-bg-dark border-neferos-accent shadow-[0_0_10px_#e36bed]' 
                    : 'bg-neferos-bg-dark border-white/20'
                  }
                  ${step.link && !step.active ? 'group-hover:border-white' : ''}
                `}
              >
                {step.active && (
                  <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-neferos-accent" />
                )}
              </div>
            </Link>

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
          </div>
        ))}
      </div>

      {/* --- MOBILE VERSION (Horizontale en bas) --- */}
      {/* pb-10 pour remonter le tout du bas de l'écran */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center pb-10 pt-6 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-10 pointer-events-auto relative">
           
           {/* Ligne horizontale */}
           {/* top-[5px] pour aligner parfaitement avec le centre des points de 12px (h-3) */}
           {/* left/right ajustés pour ne pas dépasser sur les textes */}
           <div className="absolute left-6 right-6 top-[5px] h-0.5 bg-white/10 -z-10" />

           {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2 relative w-12">
              <Link to={step.link || '#'} className={`${step.link ? 'cursor-pointer' : 'cursor-default'}`}>
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
              
              <span 
                className={`font-tektur text-[9px] tracking-wider uppercase transition-all duration-300 absolute top-6 whitespace-nowrap
                  ${step.active 
                    ? 'text-white font-bold opacity-100' 
                    : 'text-white/40 opacity-70'
                  }
                `}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
