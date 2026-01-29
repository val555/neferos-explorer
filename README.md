# Neferos Explorer

**Neferos Explorer** est une application web immersive de type "sci-fi dashboard" conçue pour l'exploration visuelle de la galaxie Neferos. Ce projet allie une interface utilisateur futuriste à une expérience 3D interactive, permettant de naviguer fluidement entre une vue galactique, des systèmes planétaires et des détails de planètes.

L'application est une **Single Page Application (SPA)** moderne, mettant l'accent sur la performance, les animations fluides et une architecture modulaire.

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

