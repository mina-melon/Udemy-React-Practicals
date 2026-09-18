import React from 'react';
import { BookmarkIcon, BookmarkFilledIcon } from './Icons';
import './WatchlistButton.css';

export default function WatchlistButton({
  isWatchlisted = false,
  variant = 'icon', // 'icon' | 'button' | 'pill'
  size = 'md',
  className = '',
  onClick = undefined,
  ...props
}) {
  const isButtonMode = variant === 'button' || variant === 'pill';

  return (
    <button
      type="button"
      className={`sf-watchlist-btn sf-watchlist-${variant} sf-watchlist-${size} ${
        isWatchlisted ? 'is-active' : ''
      } ${className}`}
      aria-label={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
      title={isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
      onClick={onClick}
      {...props}
    >
      {isWatchlisted ? (
        <BookmarkFilledIcon
          size={size === 'lg' ? 22 : size === 'sm' ? 15 : 18}
          className="sf-watchlist-icon active"
        />
      ) : (
        <BookmarkIcon
          size={size === 'lg' ? 22 : size === 'sm' ? 15 : 18}
          className="sf-watchlist-icon"
        />
      )}

      {isButtonMode && (
        <span className="sf-watchlist-label">
          {isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
        </span>
      )}
    </button>
  );
}
