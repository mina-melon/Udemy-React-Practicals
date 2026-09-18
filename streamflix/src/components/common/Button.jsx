import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = [
    'sf-btn',
    `sf-btn-${variant}`,
    `sf-btn-${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon && <span className="sf-btn-icon sf-btn-icon-left">{icon}</span>}
      {children && <span className="sf-btn-text">{children}</span>}
      {iconRight && <span className="sf-btn-icon sf-btn-icon-right">{iconRight}</span>}
    </button>
  );
}
