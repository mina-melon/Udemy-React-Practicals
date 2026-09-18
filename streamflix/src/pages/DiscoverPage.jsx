import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import FilterBar from '../components/search/FilterBar';
import MovieGrid from '../components/movie/MovieGrid';
import { MOCK_MOVIES } from '../data/mockMovies';
import './DiscoverPage.css';

export default function DiscoverPage({
  onSelectMovie = () => {},
  initialCategory = 'All',
}) {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState(
    initialCategory !== 'All' ? initialCategory : 'All Genres'
  );
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="sf-page sf-discover-page container fade-in">
      {/* Page Header */}
      <div className="sf-page-header">
        <div className="sf-page-title-badge">Curated Discovery</div>
        <h1 className="sf-page-title">Discover Movies</h1>
        <p className="sf-page-subtitle">
          Explore movies by genre, rating, popularity, and release date. Find your next favorite film from our cinematic catalog.
        </p>
      </div>

      {/* Search Input Section */}
      <section className="sf-discover-search-wrapper" aria-label="Search and filter section">
        <SearchBar
          totalResults={MOCK_MOVIES.length}
          showControls={true}
          onFilterToggle={() => setShowFilters(!showFilters)}
        />
      </section>

      {/* Filter Controls Bar */}
      {showFilters && (
        <section className="sf-discover-filters-section" aria-label="Filters">
          <FilterBar
            selectedGenre={selectedGenre}
            onGenreSelect={(genre) => setSelectedGenre(genre)}
            viewMode={viewMode}
            onViewModeChange={(mode) => setViewMode(mode)}
            onClearFilters={() => setSelectedGenre('All Genres')}
          />
        </section>
      )}

      {/* Movie Results Grid */}
      <section className="sf-discover-grid-section" aria-label="Discovered Movies">
        <MovieGrid
          movies={MOCK_MOVIES}
          viewMode={viewMode}
          aspectRatio="poster"
          onMovieClick={onSelectMovie}
        />
      </section>
    </div>
  );
}
