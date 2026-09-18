import React, { useState } from 'react';
import { SearchIcon, CloseIcon, FilterIcon, ChevronDownIcon } from '../common/Icons';
import { SORT_OPTIONS } from '../../data/mockMovies';
import './SearchBar.css';

export default function SearchBar({
  placeholder = 'Search movies, genres, actors, directors...',
  initialQuery = '',
  totalResults = null,
  showControls = true,
  onFilterToggle = undefined,
  className = '',
}) {
  const [query, setQuery] = useState(initialQuery);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={`sf-search-section ${className}`}>
      {/* Search Bar Input Row */}
      <div className="sf-search-bar-wrapper">
        <div className="sf-search-input-box">
          <SearchIcon size={22} className="sf-search-box-icon" />
          <input
            type="text"
            className="sf-search-input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search movies"
          />
          {query.length > 0 && (
            <button
              type="button"
              className="sf-search-clear-btn"
              aria-label="Clear search input"
              onClick={handleClear}
            >
              <CloseIcon size={18} />
            </button>
          )}
        </div>

        {showControls && (
          <div className="sf-search-extra-controls">
            {/* Filter Toggle Button */}
            <button
              type="button"
              className="sf-search-filter-btn"
              onClick={onFilterToggle}
              aria-label="Toggle search filters"
            >
              <FilterIcon size={18} />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="sf-sort-dropdown-wrapper">
              <select
                className="sf-sort-select"
                aria-label="Sort search results"
                defaultValue="popularity.desc"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-select-chevron" />
            </div>
          </div>
        )}
      </div>

      {/* Search Results Summary Header (Pure UI demonstration) */}
      <div className="sf-search-results-header">
        <h2 className="sf-search-heading">
          {query ? (
            <>
              Results for <span className="sf-search-highlight">"{query}"</span>
            </>
          ) : (
            'All Featured Titles'
          )}
        </h2>
        {totalResults !== null && (
          <span className="sf-results-count">
            {totalResults} {totalResults === 1 ? 'movie' : 'movies'} found
          </span>
        )}
      </div>
    </div>
  );
}
