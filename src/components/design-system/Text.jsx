/**
 * 📝 TEXT COMPONENT
 * Composant polymorphe pour toute la hiérarchie typographique
 * Utilise les tokens de theme pour cohérence
 * 
 * Usage:
 * <Text as="h1" variant="heading" size="xl">Title</Text>
 * <Text variant="body" size="sm">Description</Text>
 * <Text variant="label" upperc
ase>LABEL</Text>
 */

import { typography, colors } from '@/theme';

/**
 * MAP DES VARIANTES
 */
const variantMap = {
  h1: { element: 'h1', styles: typography.semantic.pageTitle },
  h2: { element: 'h2', styles: typography.semantic.sectionTitle },
  h3: { element: 'h3', styles: typography.semantic.subsectionTitle },
  h4: { element: 'h4', styles: typography.semantic.cardTitle },
  h5: { element: 'h5', styles: typography.semantic.label },
  h6: { element: 'h6', styles: typography.semantic.label },
  body: { element: 'p', styles: typography.semantic.bodyRegular },
  bodySmall: { element: 'p', styles: typography.semantic.bodySecondary },
  label: { element: 'span', styles: typography.semantic.label },
  button: { element: 'span', styles: typography.semantic.button },
  code: { element: 'code', styles: typography.semantic.code },
  techLabel: { element: 'span', styles: typography.semantic.techLabel },
};

/**
 * TAILWIND CLASSES MAP (Pour éviter inline styles)
 */
const tailwindClasses = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-tektur font-bold leading-tight -tracking-wider',
  h2: 'text-3xl md:text-4xl font-tektur font-bold leading-snug -tracking-wide',
  h3: 'text-2xl md:text-3xl font-tektur font-bold leading-snug -tracking-tight',
  h4: 'text-xl font-tektur font-semibold',
  h5: 'text-lg font-tektur font-semibold uppercase tracking-wider',
  body: 'text-base leading-relaxed font-space-grotesk',
  bodySmall: 'text-sm leading-relaxed font-space-grotesk text-neutral-400',
  label: 'text-xs font-tektur font-semibold uppercase tracking-widest',
  button: 'text-sm font-space-grotesk font-medium uppercase tracking-wider',
  code: 'font-mono text-sm',
  techLabel: 'text-xs font-tektur font-semibold uppercase tracking-widest',
};

/**
 * COULEUR MAP
 */
const colorMap = {
  primary: 'text-neutral-0',
  secondary: 'text-neutral-200',
  tertiary: 'text-neutral-400',
  accent: 'text-pink-400',
  accentPrimary: 'text-purple-200',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  info: 'text-info',
};

/**
 * MAIN COMPONENT
 */
export default function Text({
  as, // HTML element ou variante
  variant, // 'h1', 'h2', 'body', 'label', etc.
  size, // 'sm', 'md', 'lg', 'xl' (legacy, utilise variant)
  color = 'primary', // 'primary', 'secondary', 'accent', etc.
  weight, // 'normal', 'medium', 'semibold', 'bold'
  uppercase = false,
  lowercase = false,
  className = '',
  style = {},
  children,
  ...props
}) {
  // Déterminer la variante
  const resolvedVariant = variant || size || 'body';
  const config = variantMap[resolvedVariant] || variantMap.body;
  
  // Element HTML
  const Element = as || config.element || 'div';
  
  // Classes
  let classes = tailwindClasses[resolvedVariant] || '';
  classes += ' ' + colorMap[color];
  
  // Weight personnalisé
  if (weight === 'normal') classes += ' font-normal';
  if (weight === 'medium') classes += ' font-medium';
  if (weight === 'semibold') classes += ' font-semibold';
  if (weight === 'bold') classes += ' font-bold';
  
  // Transform texte
  if (uppercase) classes += ' uppercase';
  if (lowercase) classes += ' lowercase';
  
  // User classes
  classes += ' ' + className;
  
  return (
    <Element
      className={classes.trim()}
      style={style}
      {...props}
    >
      {children}
    </Element>
  );
}

/**
 * CONVENIENCE COMPONENTS
 */
export const H1 = (props) => <Text variant="h1" {...props} />;
export const H2 = (props) => <Text variant="h2" {...props} />;
export const H3 = (props) => <Text variant="h3" {...props} />;
export const H4 = (props) => <Text variant="h4" {...props} />;
export const H5 = (props) => <Text variant="h5" {...props} />;
export const H6 = (props) => <Text variant="h6" {...props} />;
export const Body = (props) => <Text variant="body" {...props} />;
export const BodySmall = (props) => <Text variant="bodySmall" {...props} />;
export const Label = (props) => <Text variant="label" {...props} />;
export const TechLabel = (props) => <Text variant="techLabel" {...props} />;
export const Code = (props) => <Text variant="code" {...props} />;
