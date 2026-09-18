import React from 'react';
import Hero from '../components/hero/Hero';
import MovieSection from '../components/movie/MovieSection';
import Badge from '../components/common/Badge';
import {
  FEATURED_HERO_MOVIE,
  TRENDING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
  RECOMMENDED_MOVIES,
  GENRES,
} from '../data/mockMovies';
import './HomePage.css';

export default function HomePage({
  onSelectMovie = () => {},
  onNavigate = () => {},
}) {
  return (
    <div className="sf-page sf-home-page fade-in">
      {/* Featured Cinematic Hero Section */}
      <Hero
        movie={FEATURED_HERO_MOVIE}
        onWatchNow={() => onSelectMovie(FEATURED_HERO_MOVIE)}
        onDetailsClick={() => onSelectMovie(FEATURED_HERO_MOVIE)}
      />

      {/* Main Content Sections */}
      <div className="sf-home-content">
        {/* Category Chips Bar */}
        <section className="sf-categories-strip container" aria-label="Browse by Category">
          <div className="sf-categories-scroll no-scrollbar">
            {GENRES.map((genre) => (
              <button
                key={genre}
                type="button"
                className="sf-category-chip"
                onClick={() => onNavigate('discover')}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        {/* 1. Trending Now */}
        <MovieSection
          title="Trending Now"
          subtitle="The most-watched titles across Streamflix today"
          movies={TRENDING_MOVIES}
          onSeeAll={() => onNavigate('discover')}
          onMovieClick={onSelectMovie}
        />

        {/* 2. Popular Movies */}
        <MovieSection
          title="Popular Movies"
          subtitle="Blockbusters and fan favorites this season"
          movies={POPULAR_MOVIES}
          onSeeAll={() => onNavigate('popular')}
          onMovieClick={onSelectMovie}
        />

        {/* 3. Top Rated */}
        <MovieSection
          title="Top Rated Cinema"
          subtitle="Critically acclaimed masterpieces rated 8.0 and above"
          movies={TOP_RATED_MOVIES}
          onSeeAll={() => onNavigate('top-rated')}
          onMovieClick={onSelectMovie}
        />

        {/* 4. Upcoming Releases */}
        <MovieSection
          title="Upcoming Releases"
          subtitle="Highly anticipated films coming to theaters & streaming"
          movies={UPCOMING_MOVIES}
          onSeeAll={() => onNavigate('upcoming')}
          onMovieClick={onSelectMovie}
        />

        {/* 5. Recommended For You */}
        <MovieSection
          title="Recommended For You"
          subtitle="Hand-picked curation based on your viewing tastes"
          movies={RECOMMENDED_MOVIES}
          onSeeAll={() => onNavigate('discover')}
          onMovieClick={onSelectMovie}
        />
      </div>
    </div>
  );
}
