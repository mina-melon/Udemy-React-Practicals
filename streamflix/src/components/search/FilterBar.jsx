import React from 'react';
import {
  GENRES,
  RELEASE_YEARS,
  SORT_OPTIONS,
} from '../../data/mockMovies';
import { GridIcon, ListIcon, ChevronDownIcon, CloseIcon } from '../common/Icons';
import './FilterBar.css';

export default function FilterBar({
  selectedGenre = 'All Genres',
  onGenreSelect = () => {},
  viewMode = 'grid',
  onViewModeChange = () => {},
  onClearFilters = () => {},
  className = '',
}) {
  const ratingOptions = [
    { value: 'all', label: 'Any Rating' },
    { value: '8', label: '★ 8.0 & Above' },
    { value: '7', label: '★ 7.0 & Above' },
    { value: '6', label: '★ 6.0 & Above' },
  ];

  return (
    <div className={`sf-filter-bar ${className}`}>
      {/* Top Filter Controls Row */}
      <div className="sf-filter-controls-row">
        {/* Dropdown Filters Group */}
        <div className="sf-filter-selects-group">
          {/* Genre Dropdown */}
          <div className="sf-filter-select-wrapper">
            <label className="sf-filter-label" htmlFor="genre-select">Genre</label>
            <div className="sf-custom-select-box">
              <select
                id="genre-select"
                className="sf-filter-dropdown"
                value={selectedGenre}
                onChange={(e) => onGenreSelect(e.target.value)}
              >
                {GENRES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-filter-chevron" />
            </div>
          </div>

          {/* Release Year Dropdown */}
          <div className="sf-filter-select-wrapper">
            <label className="sf-filter-label" htmlFor="year-select">Release Year</label>
            <div className="sf-custom-select-box">
              <select
                id="year-select"
                className="sf-filter-dropdown"
                defaultValue="All Years"
              >
                {RELEASE_YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-filter-chevron" />
            </div>
          </div>

          {/* Rating Dropdown */}
          <div className="sf-filter-select-wrapper">
            <label className="sf-filter-label" htmlFor="rating-select">Minimum Rating</label>
            <div className="sf-custom-select-box">
              <select
                id="rating-select"
                className="sf-filter-dropdown"
                defaultValue="all"
              >
                {ratingOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-filter-chevron" />
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="sf-filter-select-wrapper">
            <label className="sf-filter-label" htmlFor="sort-select">Sort By</label>
            <div className="sf-custom-select-box">
              <select
                id="sort-select"
                className="sf-filter-dropdown"
                defaultValue="popularity.desc"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={16} className="sf-filter-chevron" />
            </div>
          </div>
        </div>

        {/* View Mode Switcher and Clear Button */}
        <div className="sf-filter-actions-group">
          {/* Clear Filters Button */}
          <button
            type="button"
            className="sf-clear-filters-btn"
            onClick={onClearFilters}
            title="Reset all filter choices"
          >
            <CloseIcon size={16} />
            <span>Reset Filters</span>
          </button>

          {/* View Mode Toggle */}
          <div className="sf-view-mode-toggle" role="group" aria-label="View Layout">
            <button
              type="button"
              className={`sf-view-toggle-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid view layout"
              title="Grid View"
            >
              <GridIcon size={18} />
            </button>
            <button
              type="button"
              className={`sf-view-toggle-btn ${viewMode === 'list' ? 'is-active' : ''}`}
              onClick={() => onViewModeChange('list')}
              aria-label="List view layout"
              title="List View"
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Genre Pills Quick-Bar */}
      <div className="sf-genre-pills-scroll no-scrollbar">
        {GENRES.map((genre) => {
          const isSelected = selectedGenre === genre;
          return (
            <button
              key={genre}
              type="button"
              className={`sf-genre-pill-btn ${isSelected ? 'is-selected' : ''}`}
              onClick={() => onGenreSelect(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
