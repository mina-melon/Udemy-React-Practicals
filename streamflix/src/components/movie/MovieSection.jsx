import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';
import './MovieSection.css';

export default function MovieSection({
  title,
  subtitle = null,
  movies = [],
  onSeeAll = undefined,
  onMovieClick = undefined,
  onWatchlistToggle = undefined,
  aspectRatio = 'poster',
  className = '',
}) {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -600 : 600;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section className={`sf-movie-section ${className}`} aria-label={title}>
      <div className="sf-section-header container">
        <div className="sf-section-header-left">
          <div className="sf-section-title-wrapper">
            <span className="sf-section-accent-bar" />
            <h2 className="sf-section-title">{title}</h2>
          </div>
          {subtitle && <p className="sf-section-subtitle">{subtitle}</p>}
        </div>

        <div className="sf-section-header-right">
          {onSeeAll && (
            <button
              type="button"
              className="sf-section-see-all-btn"
              onClick={onSeeAll}
            >
              See All
              <ChevronRightIcon size={16} />
            </button>
          )}

          {/* Horizontal Scroll Chevrons */}
          <div className="sf-section-nav-buttons">
            <button
              type="button"
              className="sf-section-nav-btn"
              aria-label={`Scroll ${title} left`}
              onClick={() => handleScroll('left')}
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              type="button"
              className="sf-section-nav-btn"
              aria-label={`Scroll ${title} right`}
              onClick={() => handleScroll('right')}
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="sf-section-track-container container">
        <div className="sf-section-track no-scrollbar" ref={carouselRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="sf-section-card-item">
              <MovieCard
                movie={movie}
                aspectRatio={aspectRatio}
                onCardClick={onMovieClick}
                onWatchlistToggle={onWatchlistToggle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
