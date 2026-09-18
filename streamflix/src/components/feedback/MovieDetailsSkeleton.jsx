import React from 'react';
import './Skeleton.css';

export default function MovieDetailsSkeleton({ className = '' }) {
  return (
    <div className={`sf-details-skeleton container ${className}`} aria-hidden="true">
      <div className="sf-details-skeleton-hero">
        <div className="sf-skeleton-box sf-details-skeleton-poster" />
        <div className="sf-details-skeleton-info">
          <div className="sf-skeleton-box" style={{ width: '40%', height: '32px' }} />
          <div className="sf-skeleton-box" style={{ width: '25%', height: '20px' }} />
          <div className="sf-skeleton-box" style={{ width: '90%', height: '80px' }} />
          <div className="sf-skeleton-box" style={{ width: '50%', height: '36px' }} />
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <div className="sf-skeleton-box" style={{ width: '160px', height: '48px' }} />
            <div className="sf-skeleton-box" style={{ width: '160px', height: '48px' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="sf-skeleton-box"
            style={{ width: '120px', height: '160px', borderRadius: '12px' }}
          />
        ))}
      </div>
    </div>
  );
}
