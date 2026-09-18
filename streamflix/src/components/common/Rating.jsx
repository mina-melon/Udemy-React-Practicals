import React from 'react';
import { StarIcon } from './Icons';
import './Rating.css';

export default function Rating({
  value = 0,
  voteCount = null,
  showMax = false,
  size = 'md',
  variant = 'badge',
  className = '',
}) {
  const formattedScore = typeof value === 'number' ? value.toFixed(1) : value;

  const formattedVotes =
    voteCount !== null && voteCount !== undefined
      ? voteCount >= 1000
        ? `${(voteCount / 1000).toFixed(1)}k`
        : voteCount
      : null;

  return (
    <div className={`sf-rating sf-rating-${variant} sf-rating-${size} ${className}`}>
      <StarIcon className="sf-rating-star" size={size === 'lg' ? 18 : size === 'sm' ? 12 : 14} />
      <span className="sf-rating-score">{formattedScore}</span>
      {showMax && <span className="sf-rating-max">/10</span>}
      {formattedVotes && (
        <span className="sf-rating-votes">({formattedVotes})</span>
      )}
    </div>
  );
}
