import React from 'react';
import './Logo.css';

export default function Logo({ size = 'md', className = '', onClick = undefined }) {
  return (
    <div
      className={`sf-logo sf-logo-${size} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="sf-logo-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4V20L19 12L7 4Z" fill="url(#logo_grad)" />
          <defs>
            <linearGradient id="logo_grad" x1="7" y1="4" x2="19" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF2E3D" />
              <stop offset="1" stopColor="#B30710" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="sf-logo-text">STREAM<span>FLIX</span></span>
    </div>
  );
}
