# Neferos Explorer

**Neferos Explorer** est une application web immersive de type "sci-fi dashboard" conçue pour l'exploration visuelle de la galaxie Neferos. Ce projet allie une interface utilisateur futuriste à une expérience 3D interactive, permettant de naviguer fluidement entre une vue galactique, des systèmes planétaires et des détails de planètes.

L'application est une **Single Page Application (SPA)** moderne, mettant l'accent sur la performance, les animations fluides et une architecture modulaire.

**Arborescence** neferos-explorer
├── index.html                        # Point d'entrée HTML de l'application
├── README.md                         # Documentation du projet
├── vite.config.js                    # Configuration du bundler Vite
├── public/                           # Dossier des ressources statiques publiques (actuellement vide)
└── src/                              # Code source de l'application React
    ├── App.jsx                       # Composant racine définissant les routes
    ├── index.css                     # Styles globaux CSS
    ├── main.jsx                      # Point d'entrée JavaScript montant l'application
    ├── assets/                       # Ressources statiques importées dans le code
    │   └── images/                   # Images du projet
    │       ├── galaxy-spiral.svg     # Illustration vectorielle de la galaxie
    │       └── logo-neferos.png      # Logo principal de l'application
    ├── components/                   # Composants React modulaires
    │   ├── background/               # Composants d'arrière-plan
    │   │   └── StarBackground.jsx    # Animation de fond étoilé
    │   ├── galaxy/                   # Composants liés à la carte galactique
    │   │   └── SectorButton.jsx      # Bouton interactif pour les secteurs
    │   ├── layout/                   # Composants de structure de page
    │   │   ├── Breadcrumb.jsx        # Fil d'Ariane pour la navigation
    │   │   └── Navbar.jsx            # Barre de navigation principale
    │   └── planet/                   # Composants liés à l'affichage des planètes
    │       ├── Planet3D.jsx          # Rendu 3D d'une planète (Three.js)
    │       └── PlanetScene.jsx       # Scène conteneur pour l'objet 3D
    ├── data/                         # Données statiques
    │   └── neferos-data.json         # Base de données JSON de l'univers (systèmes, planètes)
    ├── layouts/                      # Mises en page globales
    │   └── MainLayout.jsx            # Layout principal (Navbar + Outlet + Background)
    └── pages/                        # Composants de type "Page" (Vues)
        ├── HomePage.jsx              # Page d'accueil
        ├── PlanetPage.jsx            # Page de détails d'une planète
        └── SystemPage.jsx            # Page de détails d'un système solaire

## 🛠 Stack Technique

Le projet repose sur un écosystème de développement de pointe, centré autour de **React 19** et **Vite**.

### Cœur (Core)
- **[React 19](https://react.dev/)** : Bibliothèque UI principale pour la gestion des composants et de l'état.
- **[Vite](https://vitejs.dev/)** : Outil de build nouvelle génération, assurant un HMR (Hot Module Replacement) instantané et des builds optimisés.
- **[React Router DOM v7](https://reactrouter.com/)** : Gestionnaire de routage pour la navigation côté client (SPA).

### Interface & Styling
- **[TailwindCSS v4](https://tailwindcss.com/)** : Framework CSS utilitaire (dernière version) pour un styling rapide, responsive et maintenable.
- **[Framer Motion](https://www.framer.com/motion/)** : Moteur d'animation puissant utilisé pour les transitions de pages, les effets d'apparition et les orbites planétaires en 2D.
- **Heroicons** : Bibliothèque d'icônes SVG légères.

### 3D & WebGL
- **[Three.js](https://threejs.org/)** : Moteur 3D JavaScript standard pour le rendu WebGL.
- **[React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber)** : Réconciliateur React pour Three.js, permettant une gestion déclarative de la scène 3D.
- **[React Three Drei](https://github.com/pmndrs/drei)** : Collection d'abstractions utiles pour R3F (caméras, contrôles, chargement d'environnement).

