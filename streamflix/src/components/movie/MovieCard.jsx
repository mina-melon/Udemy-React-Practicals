import React from 'react';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import WatchlistButton from '../common/WatchlistButton';
import { PlayIcon, InfoIcon, TrashIcon } from '../common/Icons';
import './MovieCard.css';

export default function MovieCard({
  movie,
  onCardClick = undefined,
  onWatchlistToggle = undefined,
  onRemove = undefined,
  showRemoveAction = false,
  aspectRatio = 'poster', // 'poster' (2:3) or 'backdrop' (16:9)
  className = '',
}) {
  if (!movie) return null;

  const imageSrc =
    aspectRatio === 'backdrop' ? movie.backdrop || movie.poster : movie.poster;

  const primaryGenre =
    Array.isArray(movie.genres) && movie.genres.length > 0
      ? movie.genres[0]
      : movie.genre || 'Cinema';

  return (
    <article
      className={`sf-movie-card sf-card-${aspectRatio} ${className}`}
      onClick={() => onCardClick && onCardClick(movie)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${movie.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCardClick && onCardClick(movie);
        }
      }}
    >
      {/* Media Poster Wrapper */}
      <div className="sf-card-media-wrapper">
        <img
          src={imageSrc}
          alt={movie.title}
          className="sf-card-image"
          loading="lazy"
        />

        {/* Dynamic Badges */}
        <div className="sf-card-top-badges">
          {movie.badge && (
            <Badge
              variant={
                movie.badge.includes('Trending')
                  ? 'trending'
                  : movie.badge.includes('Top')
                  ? 'gold'
                  : 'default'
              }
              size="sm"
            >
              {movie.badge}
            </Badge>
          )}

          {/* Rating Pill */}
          <Rating value={movie.rating} size="sm" variant="badge" />
        </div>

        {/* Watchlist Bookmark or Remove Action Button */}
        <div
          className="sf-card-action-corner"
          onClick={(e) => e.stopPropagation()}
        >
          {showRemoveAction ? (
            <button
              type="button"
              className="sf-card-remove-btn"
              title="Remove from Watchlist"
              aria-label={`Remove ${movie.title} from watchlist`}
              onClick={(e) => {
                e.stopPropagation();
                onRemove && onRemove(movie);
              }}
            >
              <TrashIcon size={16} />
            </button>
          ) : (
            <WatchlistButton
              isWatchlisted={movie.isWatchlisted}
              variant="icon"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onWatchlistToggle && onWatchlistToggle(movie);
              }}
            />
          )}
        </div>

        {/* Hover Overlay with Quick Action Buttons */}
        <div className="sf-card-hover-overlay">
          <div className="sf-card-hover-actions">
            <button
              type="button"
              className="sf-card-hover-play-btn"
              aria-label={`Play ${movie.title}`}
              title="Quick Play"
              onClick={(e) => {
                e.stopPropagation();
                onCardClick && onCardClick(movie);
              }}
            >
              <PlayIcon size={20} />
            </button>
          </div>
          <span className="sf-card-hover-hint">View Movie Info</span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="sf-card-info">
        <h3 className="sf-card-title line-clamp-1" title={movie.title}>
          {movie.title}
        </h3>

        <div className="sf-card-meta">
          <span className="sf-card-year">{movie.year || (movie.releaseDate ? movie.releaseDate.substring(0, 4) : '')}</span>
          <span className="sf-card-meta-divider">&bull;</span>
          <span className="sf-card-genre">{primaryGenre}</span>
          {movie.runtime && (
            <>
              <span className="sf-card-meta-divider">&bull;</span>
              <span className="sf-card-runtime">{movie.runtime}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
