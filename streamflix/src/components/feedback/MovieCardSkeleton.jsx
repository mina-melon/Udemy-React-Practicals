import React from 'react';
import './Skeleton.css';

export default function MovieCardSkeleton({ className = '' }) {
  return (
    <div className={`sf-card-skeleton ${className}`} aria-hidden="true">
      <div className="sf-skeleton-box sf-card-skeleton-poster" />
      <div className="sf-card-skeleton-info">
        <div className="sf-skeleton-box sf-skeleton-line sf-skeleton-title" />
        <div className="sf-skeleton-box sf-skeleton-line sf-skeleton-meta" />
      </div>
    </div>
  );
}
