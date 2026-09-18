import React from 'react';
import './Badge.css';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = [
    'sf-badge',
    `sf-badge-${variant}`,
    `sf-badge-${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
