import React, { useState } from 'react';
import MovieCardSkeleton from '../components/feedback/MovieCardSkeleton';
import MovieGridSkeleton from '../components/feedback/MovieGridSkeleton';
import HeroSkeleton from '../components/feedback/HeroSkeleton';
import MovieDetailsSkeleton from '../components/feedback/MovieDetailsSkeleton';
import ErrorState from '../components/feedback/ErrorState';
import EmptyState from '../components/feedback/EmptyState';
import './PreviewStatesPage.css';

export default function PreviewStatesPage() {
  const [activeTab, setActiveTab] = useState('skeletons');

  return (
    <div className="sf-page sf-states-page container fade-in">
      <div className="sf-states-header">
        <div className="sf-states-badge">Developer Presentation Gallery</div>
        <h1 className="sf-states-title">UI Feedback & Asynchronous States</h1>
        <p className="sf-states-subtitle">
          Preview all reusable Skeleton loaders, Error screens, and Empty state layouts designed for when you implement data fetching, hooks, and error handling.
        </p>

        {/* Tab Navigation */}
        <div className="sf-states-tabs">
          <button
            type="button"
            className={`sf-states-tab ${activeTab === 'skeletons' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('skeletons')}
          >
            Skeleton Loaders
          </button>
          <button
            type="button"
            className={`sf-states-tab ${activeTab === 'error' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('error')}
          >
            Error State
          </button>
          <button
            type="button"
            className={`sf-states-tab ${activeTab === 'empty' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('empty')}
          >
            Empty States
          </button>
        </div>
      </div>

      {/* Skeletons Tab */}
      {activeTab === 'skeletons' && (
        <div className="sf-states-tab-content fade-in">
          {/* 1. Hero Skeleton */}
          <section className="sf-state-preview-block">
            <h3 className="sf-state-block-title">1. HeroSkeleton</h3>
            <p className="sf-state-block-desc">
              Displayed while featured premiere metadata and high-res backdrops are streaming in.
            </p>
            <div className="sf-state-frame">
              <HeroSkeleton />
            </div>
          </section>

          {/* 2. Movie Card & Grid Skeletons */}
          <section className="sf-state-preview-block">
            <h3 className="sf-state-block-title">2. MovieGridSkeleton (6 cards preview)</h3>
            <p className="sf-state-block-desc">
              Pulsing shimmer placeholders matching the 2:3 card aspect ratio.
            </p>
            <div className="sf-state-frame sf-state-frame-padded">
              <MovieGridSkeleton count={6} />
            </div>
          </section>

          {/* 3. Movie Details Skeleton */}
          <section className="sf-state-preview-block">
            <h3 className="sf-state-block-title">3. MovieDetailsSkeleton</h3>
            <p className="sf-state-block-desc">
              Skeleton state for single movie details, overview, and cast members.
            </p>
            <div className="sf-state-frame sf-state-frame-padded">
              <MovieDetailsSkeleton />
            </div>
          </section>
        </div>
      )}

      {/* Error State Tab */}
      {activeTab === 'error' && (
        <div className="sf-states-tab-content fade-in">
          <section className="sf-state-preview-block">
            <h3 className="sf-state-block-title">Reusable ErrorState</h3>
            <p className="sf-state-block-desc">
              Designed for HTTP 500, network timeouts, or TMDB rate limit failures.
            </p>
            <div className="sf-state-frame sf-state-frame-padded">
              <ErrorState
                title="Something went wrong"
                message="We couldn't load the movies right now. Please check your network connection or verify your API key and try again."
                onRetry={() => alert('Retry handler called (Ready for your logic!)')}
              />
            </div>
          </section>
        </div>
      )}

      {/* Empty States Tab */}
      {activeTab === 'empty' && (
        <div className="sf-states-tab-content fade-in">
          <section className="sf-state-preview-block">
            <h3 className="sf-state-block-title">Empty State Variations</h3>
            <p className="sf-state-block-desc">
              Pre-built empty states for Watchlist, Search, Catalog, and Recommendations.
            </p>

            <div className="sf-empty-states-grid">
              {/* Variant 1: Search */}
              <div className="sf-empty-preview-card">
                <h4 className="sf-empty-variant-label">Variant: No Search Results</h4>
                <EmptyState
                  variant="search"
                  title="No movies found"
                  description="We couldn’t find any matches for &quot;Intergalactica&quot;. Try different keywords or adjust filters."
                  actionText="Reset Search"
                  onAction={() => alert('Action clicked')}
                />
              </div>

              {/* Variant 2: Watchlist */}
              <div className="sf-empty-preview-card">
                <h4 className="sf-empty-variant-label">Variant: Empty Watchlist</h4>
                <EmptyState
                  variant="watchlist"
                  title="Your watchlist is empty"
                  description="Movies you save will appear here. Start exploring and bookmark titles you want to watch later."
                  actionText="Discover Movies"
                  onAction={() => alert('Action clicked')}
                />
              </div>

              {/* Variant 3: Recommendations */}
              <div className="sf-empty-preview-card">
                <h4 className="sf-empty-variant-label">Variant: No Recommendations</h4>
                <EmptyState
                  variant="recommendations"
                  title="No recommendations yet"
                  description="Rate movies or add them to your watchlist to unlock tailored movie picks."
                  actionText="Browse Popular"
                  onAction={() => alert('Action clicked')}
                />
              </div>

              {/* Variant 4: Movies */}
              <div className="sf-empty-preview-card">
                <h4 className="sf-empty-variant-label">Variant: No Movies in Category</h4>
                <EmptyState
                  variant="movies"
                  title="No movies available"
                  description="There are currently no movies listed in this selected category."
                  actionText="Back to All"
                  onAction={() => alert('Action clicked')}
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
