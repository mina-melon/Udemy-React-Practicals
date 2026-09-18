import React from 'react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Rating from '../components/common/Rating';
import WatchlistButton from '../components/common/WatchlistButton';
import MovieSection from '../components/movie/MovieSection';
import {
  PlayIcon,
  ClockIcon,
  CalendarIcon,
  GlobeIcon,
  ChevronLeftIcon,
  FilmIcon,
} from '../components/common/Icons';
import { MOCK_MOVIES } from '../data/mockMovies';
import './MovieDetailsPage.css';

export default function MovieDetailsPage({
  movie = MOCK_MOVIES[0],
  onBack = () => {},
  onSelectMovie = () => {},
  onWatchlistToggle = undefined,
}) {
  if (!movie) return null;

  // Derive similar and recommended subsets
  const similarMovies = MOCK_MOVIES.filter((m) => m.id !== movie.id).slice(0, 6);
  const recommendedMovies = MOCK_MOVIES.filter((m) => m.id !== movie.id)
    .reverse()
    .slice(0, 6);

  return (
    <div className="sf-page sf-details-page fade-in">
      {/* Back Navigation Bar */}
      <div className="sf-details-back-bar container">
        <button
          type="button"
          className="sf-details-back-btn"
          onClick={onBack}
          aria-label="Back to previous page"
        >
          <ChevronLeftIcon size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Hero / Details Backdrop Banner */}
      <div className="sf-details-hero-backdrop-wrapper">
        <img
          src={movie.backdrop || movie.poster}
          alt={movie.title}
          className="sf-details-hero-backdrop"
        />
        <div className="sf-details-hero-overlay" />
        <div className="sf-details-hero-bottom-fade" />
      </div>

      {/* Main Details Card Container */}
      <div className="sf-details-main-container container">
        <div className="sf-details-layout">
          {/* Left Column: Movie Poster */}
          <div className="sf-details-poster-col">
            <div className="sf-details-poster-card">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="sf-details-poster-img"
              />
              {movie.badge && (
                <div className="sf-details-poster-badge">
                  <Badge variant="trending" size="md">
                    {movie.badge}
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Title, Metadata, Synopsis & Actions */}
          <div className="sf-details-info-col">
            {/* Meta Tags Row */}
            <div className="sf-details-meta-row">
              <Rating value={movie.rating} voteCount={movie.voteCount} size="md" variant="badge" />
              <span className="sf-details-meta-pill">{movie.year}</span>
              <span className="sf-details-meta-pill">
                <ClockIcon size={14} /> {movie.runtime}
              </span>
              <span className="sf-details-meta-pill">
                <GlobeIcon size={14} /> {movie.language}
              </span>
              <span className="sf-details-meta-pill sf-details-pg">PG-13</span>
            </div>

            {/* Title & Tagline */}
            <h1 className="sf-details-title">{movie.title}</h1>
            {movie.tagline && (
              <p className="sf-details-tagline">{movie.tagline}</p>
            )}

            {/* Genre Pills */}
            <div className="sf-details-genres-list">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <Badge key={genre} variant="pill" size="md">
                    {genre}
                  </Badge>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="sf-details-actions-row">
              <Button
                variant="primary"
                size="lg"
                icon={<PlayIcon size={20} />}
                onClick={() => alert(`Play preview for "${movie.title}"`)}
              >
                Watch Now
              </Button>

              <WatchlistButton
                isWatchlisted={movie.isWatchlisted}
                variant="button"
                size="lg"
                onClick={() => onWatchlistToggle && onWatchlistToggle(movie)}
              />
            </div>

            {/* Overview / Storyline */}
            <div className="sf-details-overview-block">
              <h3 className="sf-details-section-heading">Storyline</h3>
              <p className="sf-details-overview-text">{movie.overview}</p>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        {movie.cast && movie.cast.length > 0 && (
          <section className="sf-details-cast-section" aria-label="Movie Cast">
            <h3 className="sf-details-section-heading">Top Billed Cast</h3>
            <div className="sf-cast-grid">
              {movie.cast.map((actor, idx) => (
                <div key={idx} className="sf-cast-card">
                  <div className="sf-cast-avatar-wrapper">
                    <img
                      src={actor.avatar}
                      alt={actor.name}
                      className="sf-cast-avatar"
                      loading="lazy"
                    />
                  </div>
                  <div className="sf-cast-details">
                    <span className="sf-cast-name">{actor.name}</span>
                    <span className="sf-cast-character">{actor.character}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Crew & Production Specs Section */}
        <section className="sf-details-specs-section" aria-label="Production Details">
          <div className="sf-specs-grid">
            {/* Crew Column */}
            <div className="sf-specs-block">
              <h3 className="sf-details-section-heading">Key Crew</h3>
              <ul className="sf-crew-list">
                {movie.crew &&
                  movie.crew.map((member, idx) => (
                    <li key={idx} className="sf-crew-item">
                      <span className="sf-crew-name">{member.name}</span>
                      <span className="sf-crew-role">{member.role}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Production Information Column */}
            {movie.production && (
              <div className="sf-specs-block">
                <h3 className="sf-details-section-heading">Production Information</h3>
                <div className="sf-production-table">
                  <div className="sf-prod-row">
                    <span className="sf-prod-label">Status</span>
                    <span className="sf-prod-value">{movie.production.status}</span>
                  </div>
                  <div className="sf-prod-row">
                    <span className="sf-prod-label">Studio</span>
                    <span className="sf-prod-value">{movie.production.studio}</span>
                  </div>
                  <div className="sf-prod-row">
                    <span className="sf-prod-label">Budget</span>
                    <span className="sf-prod-value">{movie.production.budget}</span>
                  </div>
                  <div className="sf-prod-row">
                    <span className="sf-prod-label">Box Office</span>
                    <span className="sf-prod-value">{movie.production.revenue}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Similar Movies Section */}
        <div className="sf-details-extra-sections">
          <MovieSection
            title="More Like This"
            subtitle={`Explore titles with themes and styles similar to ${movie.title}`}
            movies={similarMovies}
            onMovieClick={onSelectMovie}
          />

          <MovieSection
            title="Recommended For You"
            subtitle="Based on viewers who enjoyed this title"
            movies={recommendedMovies}
            onMovieClick={onSelectMovie}
          />
        </div>
      </div>
    </div>
  );
}
