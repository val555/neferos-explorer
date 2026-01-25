import { useLocation, Link } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  // Détection simple
  // 1. Galaxie (Toujours là)
  // 2. Système (Si /system OU /planet)
  // 3. Planète (Si /planet)
  
  const isSystemActive = path.includes('/system') || path.includes('/planet');
  const isPlanetActive = path.includes('/planet');

  // Si on est sur une page système, on pourrait vouloir cliquer pour "remonter" à la liste (mais y'a plus de liste)
  // Donc le seul lien utile c'est le retour Galaxie.

  const steps = [
    { label: 'Galaxie', active: true, link: '/' },
    { label: 'Système', active: isSystemActive, link: null }, // Pas de lien car on y est déjà ou c'est le parent direct
    { label: 'Planète', active: isPlanetActive, link: null },
  ];

  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-12 pointer-events-none">
      {/* Ligne verticale (ajustée pour 3 points) */}
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
  );
}
