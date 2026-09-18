import React from 'react';
import Button from '../common/Button';
import { SearchIcon, BookmarkIcon, FilmIcon, LayersIcon } from '../common/Icons';
import './EmptyState.css';

export default function EmptyState({
  variant = 'watchlist', // 'watchlist' | 'search' | 'movies' | 'recommendations'
  title = null,
  description = null,
  actionText = null,
  onAction = undefined,
  className = '',
}) {
  const configs = {
    watchlist: {
      icon: <BookmarkIcon size={40} />,
      title: 'Your watchlist is empty',
      description: 'Movies you save will appear here. Start exploring and bookmark titles you want to watch later.',
      actionText: 'Discover Movies',
    },
    search: {
      icon: <SearchIcon size={40} />,
      title: 'No movies found',
      description: 'We couldn’t find any matches for your query. Try different keywords or reset your filters.',
      actionText: 'Explore All Movies',
    },
    movies: {
      icon: <FilmIcon size={40} />,
      title: 'No movies available',
      description: 'There are currently no movies listed in this category. Check back soon for new additions.',
      actionText: 'Back to Home',
    },
    recommendations: {
      icon: <LayersIcon size={40} />,
      title: 'No recommendations yet',
      description: 'Add more films to your favorites and watchlist to get personalized movie recommendations.',
      actionText: 'Browse Trending',
    },
  };

  const currentConfig = configs[variant] || configs.watchlist;

  const finalTitle = title || currentConfig.title;
  const finalDescription = description || currentConfig.description;
  const finalActionText = actionText || currentConfig.actionText;

  return (
    <div className={`sf-empty-state sf-empty-${variant} ${className}`} role="status">
      <div className="sf-empty-icon-wrapper">
        {currentConfig.icon}
      </div>
      <h3 className="sf-empty-title">{finalTitle}</h3>
      <p className="sf-empty-description">{finalDescription}</p>
      {finalActionText && (
        <div className="sf-empty-action">
          <Button variant="primary" size="md" onClick={onAction}>
            {finalActionText}
          </Button>
        </div>
      )}
    </div>
  );
}
