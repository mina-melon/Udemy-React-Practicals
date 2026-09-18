import React from 'react';
import MovieCardSkeleton from './MovieCardSkeleton';
import '../movie/MovieGrid.css';

export default function MovieGridSkeleton({ count = 12, viewMode = 'grid', className = '' }) {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`sf-movie-grid sf-view-${viewMode} ${className}`}
      aria-label="Loading movies"
      aria-busy="true"
    >
      {items.map((key) => (
        <MovieCardSkeleton key={key} />
      ))}
    </div>
  );
}
