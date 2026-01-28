import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '@/theme';

/**
 * Text component for standardized typography
 * @param {string} variant - h1, h2, h3, h4, h5, h6, body, bodySmall, label, code
 * @param {string} as - HTML tag (optional override)
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children - Content
 */
export const Text = ({ 
  variant = 'body', 
  as, 
  className = '', 
  children, 
  ...props 
}) => {
  const styles = typography.semantic[variant] || typography.semantic.body;
  
  // Determine default tag based on variant
  const defaultTag = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    bodySmall: 'p',
    label: 'span',
    code: 'code',
    pageTitle: 'h1',
    sectionTitle: 'h2',
    subTitle: 'h3'
  }[variant] || 'p';

  const Tag = as || defaultTag;
  
  // If it's a motion component needed, change Tag
  const Component = props.animate ? motion[Tag] : Tag;

  return (
    <Component className={`${styles} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Convenience exports
export const H1 = (props) => <Text variant="pageTitle" as="h1" {...props} />;
export const H2 = (props) => <Text variant="sectionTitle" as="h2" {...props} />;
export const H3 = (props) => <Text variant="subTitle" as="h3" {...props} />;
export const H4 = (props) => <Text variant="h4" as="h4" {...props} />;
export const H5 = (props) => <Text variant="h5" as="h5" {...props} />;
export const H6 = (props) => <Text variant="h6" as="h6" {...props} />;
export const Body = (props) => <Text variant="body" as="p" {...props} />;
export const BodySmall = (props) => <Text variant="bodySmall" as="p" {...props} />;
export const Label = (props) => <Text variant="label" as="span" {...props} />;
export const TechLabel = (props) => <Text variant="label" as="div" className={`border-l-2 border-purple-200 pl-2 ${props.className || ''}`} {...props} />;
export const Code = (props) => <Text variant="code" as="code" {...props} />;

export default Text;
