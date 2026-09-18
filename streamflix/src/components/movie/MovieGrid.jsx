import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

export default function MovieGrid({
  movies = [],
  viewMode = 'grid', // 'grid' | 'list'
  aspectRatio = 'poster',
  onMovieClick = undefined,
  onWatchlistToggle = undefined,
  onRemove = undefined,
  showRemoveAction = false,
  className = '',
}) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div
      className={`sf-movie-grid sf-view-${viewMode} ${className}`}
      role="region"
      aria-label="Movie Grid"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          aspectRatio={aspectRatio}
          onCardClick={onMovieClick}
          onWatchlistToggle={onWatchlistToggle}
          onRemove={onRemove}
          showRemoveAction={showRemoveAction}
        />
      ))}
    </div>
  );
}
