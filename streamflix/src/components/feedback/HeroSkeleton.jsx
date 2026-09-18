import React from 'react';
import './Skeleton.css';

export default function HeroSkeleton({ className = '' }) {
  return (
    <section className={`sf-hero-skeleton ${className}`} aria-hidden="true">
      <div className="container">
        <div className="sf-hero-skeleton-content">
          <div className="sf-skeleton-box sf-hero-skeleton-badge" />
          <div className="sf-skeleton-box sf-hero-skeleton-title" />
          <div className="sf-skeleton-box sf-hero-skeleton-desc" />
          <div className="sf-hero-skeleton-actions">
            <div className="sf-skeleton-box sf-hero-skeleton-btn" />
            <div className="sf-skeleton-box sf-hero-skeleton-btn" />
          </div>
        </div>
      </div>
    </section>
  );
}
