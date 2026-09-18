import React, { useState } from 'react';
import MovieGrid from '../components/movie/MovieGrid';
import EmptyState from '../components/feedback/EmptyState';
import { ChevronDownIcon } from '../components/common/Icons';
import { WATCHLIST_MOVIES, SORT_OPTIONS } from '../data/mockMovies';
import './WatchlistPage.css';

export default function WatchlistPage({
  onSelectMovie = () => {},
  onNavigate = () => {},
}) {
  // Pure UI state to allow previewing both populated and empty state
  const [showEmptyPreview, setShowEmptyPreview] = useState(false);
  const [watchlist, setWatchlist] = useState(WATCHLIST_MOVIES);

  const handleRemove = (movieToRemove) => {
    // Light UI demonstration helper for the developer
    setWatchlist(watchlist.filter((m) => m.id !== movieToRemove.id));
  };

  const handleResetPreview = () => {
    setWatchlist(WATCHLIST_MOVIES);
    setShowEmptyPreview(false);
  };

  const isActuallyEmpty = showEmptyPreview || watchlist.length === 0;

  return (
    <div className="sf-page sf-watchlist-page container fade-in">
      {/* Watchlist Header */}
      <div className="sf-watchlist-header">
        <div className="sf-watchlist-header-left">
          <div className="sf-watchlist-title-row">
            <h1 className="sf-watchlist-title">My Watchlist</h1>
            <span className="sf-watchlist-count-badge">
              {isActuallyEmpty ? 0 : watchlist.length} saved
            </span>
          </div>
          <p className="sf-watchlist-subtitle">
            Keep track of all the movies and series you want to watch. Synchronized across your devices.
          </p>
        </div>

        {/* Preview Mode Switcher (For developer to easily toggle empty vs filled states) */}
        <div className="sf-watchlist-preview-toggle">
          <button
            type="button"
            className={`sf-preview-chip ${!isActuallyEmpty ? 'is-active' : ''}`}
            onClick={handleResetPreview}
          >
            Show Movies ({watchlist.length})
          </button>
          <button
            type="button"
            className={`sf-preview-chip ${isActuallyEmpty ? 'is-active' : ''}`}
            onClick={() => setShowEmptyPreview(true)}
          >
            Preview Empty State
          </button>
        </div>
      </div>

      {/* Watchlist Controls Bar (Sort & Filter UI) */}
      {!isActuallyEmpty && (
        <div className="sf-watchlist-controls-bar">
          <div className="sf-watchlist-sort-wrapper">
            <span className="sf-watchlist-sort-label">Sort by:</span>
            <div className="sf-custom-select-box">
              <select className="sf-watchlist-sort-select" defaultValue="release_date.desc">
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-filter-chevron" />
            </div>
          </div>

          <span className="sf-watchlist-hint-text">
            Click the trash icon on any card to remove it from your list.
          </span>
        </div>
      )}

      {/* Main Content: Populated Grid OR Polished Empty State */}
      {isActuallyEmpty ? (
        <EmptyState
          variant="watchlist"
          title="Your watchlist is empty"
          description="Movies you save will appear here. Explore trending films and cinema classics to add to your list."
          actionText="Discover Movies"
          onAction={() => onNavigate('discover')}
        />
      ) : (
        <MovieGrid
          movies={watchlist}
          aspectRatio="poster"
          showRemoveAction={true}
          onRemove={handleRemove}
          onMovieClick={onSelectMovie}
        />
      )}
    </div>
  );
}
