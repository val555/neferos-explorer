# ⚡ QUICK START - DESIGN SYSTEM NEFEROS

## 🚀 5 minutes pour commencer

Voici les imports et patterns essentiels.

---

## 🎨 COULEURS

### Tailwind classes (RECOMMANDÉ)

```jsx
<div className="bg-neutral-900 text-neutral-0 border border-purple-200">
  Utilise les classes Tailwind
</div>
```

### Couleurs principales

```javascript
// Backgrounds
'bg-neutral-900'    // #1c1425 - Fond principal
'bg-neutral-800'    // #2f1c42 - Surfaces (cards, panels)

// Texte
'text-neutral-0'    // #ffffff - Texte principal
'text-neutral-200'  // #c7bdd5 - Texte secondaire
'text-pink-400'     // #e36bed - Accent, links

// Accents
'border-purple-200' // #a400c0 - Accent primaire
'border-pink-400'   // #e36bed - Accent light
```

---

## 📝 TYPOGRAPHIE

### Text component (RECOMMANDÉ)

```jsx
import { H1, H2, H3, Body, Label } from '@/components/design-system';

<H1>Titre de page</H1>
<H2>Titre de section</H2>
<Body>Paragraphe normal</Body>
<Label>PETIT LABEL</Label>
```

---

## 📏 SPACING

### Tailwind utilities (RECOMMANDÉ)

```jsx
// Padding responsive
<div className="p-4 md:p-6 lg:p-8">Padding responsive</div>

// Gap (flexbox/grid)
<div className="flex gap-4 md:gap-6 lg:gap-8">Items avec gap</div>
```

---

## 🎬 ANIMATIONS

```jsx
import { motion } from 'framer-motion';
import { variants } from '@/theme/transitions';

<motion.div {...variants.slideInUp}>
  Sliding from bottom
</motion.div>
```

---

## 📱 RESPONSIVE

### Mobile-first (TOUJOURS)

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Mobile d'abord → amélioration
</div>
```

---

**C'est tout! Tu es prêt à coder! 🚀**