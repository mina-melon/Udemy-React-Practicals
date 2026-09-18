import React from 'react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import WatchlistButton from '../common/WatchlistButton';
import { PlayIcon } from '../common/Icons';
import './Hero.css';

export default function Hero({
  movie,
  onWatchNow = undefined,
  onWatchlistToggle = undefined,
  onDetailsClick = undefined,
}) {
  if (!movie) return null;

  return (
    <section className="sf-hero" aria-label="Featured Movie">
      {/* Background Image Artwork */}
      <div className="sf-hero-backdrop-wrapper">
        <img
          src={movie.backdrop || movie.poster}
          alt={movie.title}
          className="sf-hero-backdrop"
        />
        {/* Layered cinematic gradients for flawless contrast */}
        <div className="sf-hero-gradient-overlay" />
        <div className="sf-hero-radial-vignette" />
        <div className="sf-hero-bottom-fade" />
      </div>

      {/* Hero Content */}
      <div className="sf-hero-container container">
        <div className="sf-hero-content">
          {/* Metadata Row */}
          <div className="sf-hero-meta-badges">
            <Badge variant="trending" size="md">
              {movie.badge || 'Featured Premiere'}
            </Badge>
            <Rating value={movie.rating} size="md" variant="badge" />
            <span className="sf-hero-meta-dot">&bull;</span>
            <span className="sf-hero-meta-text">{movie.year}</span>
            <span className="sf-hero-meta-dot">&bull;</span>
            <span className="sf-hero-meta-text">{movie.runtime}</span>
            <span className="sf-hero-meta-dot">&bull;</span>
            <span className="sf-hero-genres">
              {movie.genres ? movie.genres.slice(0, 2).join(' / ') : ''}
            </span>
          </div>

          {/* Movie Title */}
          <h1 className="sf-hero-title">{movie.title}</h1>

          {/* Tagline */}
          {movie.tagline && (
            <p className="sf-hero-tagline">{movie.tagline}</p>
          )}

          {/* Overview */}
          <p className="sf-hero-overview line-clamp-3">{movie.overview}</p>

          {/* Action Buttons */}
          <div className="sf-hero-actions">
            <Button
              variant="primary"
              size="lg"
              icon={<PlayIcon size={20} />}
              onClick={onWatchNow}
            >
              Watch Now
            </Button>

            <WatchlistButton
              isWatchlisted={movie.isWatchlisted}
              variant="button"
              size="lg"
              onClick={onWatchlistToggle}
            />

            {onDetailsClick && (
              <Button
                variant="outline"
                size="lg"
                onClick={onDetailsClick}
              >
                More Info
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
