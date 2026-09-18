import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import WatchlistPage from './pages/WatchlistPage';
import PreviewStatesPage from './pages/PreviewStatesPage';
import MovieSection from './components/movie/MovieSection';
import {
  MOCK_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
  WATCHLIST_MOVIES,
} from './data/mockMovies';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(MOCK_MOVIES[0]);
  const [previousPage, setPreviousPage] = useState('home');

  const navigateTo = (pageId) => {
    setPreviousPage(activePage);
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setPreviousPage(activePage);
    setActivePage('movie-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setActivePage(previousPage || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page component
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            onSelectMovie={handleSelectMovie}
            onNavigate={navigateTo}
          />
        );

      case 'discover':
        return (
          <DiscoverPage
            onSelectMovie={handleSelectMovie}
            initialCategory="All"
          />
        );

      case 'popular':
        return (
          <div className="sf-page container fade-in" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-3xl)' }}>
            <div className="sf-page-header" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="sf-page-title-badge">Crowd Favorites</div>
              <h1 className="sf-page-title">Popular Movies</h1>
              <p className="sf-page-subtitle">The highest-viewed titles trending worldwide right now.</p>
            </div>
            <MovieSection
              title="All Popular Titles"
              movies={POPULAR_MOVIES}
              onMovieClick={handleSelectMovie}
            />
          </div>
        );

      case 'top-rated':
        return (
          <div className="sf-page container fade-in" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-3xl)' }}>
            <div className="sf-page-header" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="sf-page-title-badge">Hall of Fame</div>
              <h1 className="sf-page-title">Top Rated Cinema</h1>
              <p className="sf-page-subtitle">Critically acclaimed works of cinema with historic ratings.</p>
            </div>
            <MovieSection
              title="Critically Acclaimed (8.0+)"
              movies={TOP_RATED_MOVIES}
              onMovieClick={handleSelectMovie}
            />
          </div>
        );

      case 'upcoming':
        return (
          <div className="sf-page container fade-in" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-3xl)' }}>
            <div className="sf-page-header" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="sf-page-title-badge">Future Premieres</div>
              <h1 className="sf-page-title">Upcoming Releases</h1>
              <p className="sf-page-subtitle">Get ready for major studio releases scheduled for 2025 and beyond.</p>
            </div>
            <MovieSection
              title="Coming Soon to Theaters & Streamflix"
              movies={UPCOMING_MOVIES}
              onMovieClick={handleSelectMovie}
            />
          </div>
        );

      case 'watchlist':
        return (
          <WatchlistPage
            onSelectMovie={handleSelectMovie}
            onNavigate={navigateTo}
          />
        );

      case 'movie-details':
        return (
          <MovieDetailsPage
            movie={selectedMovie}
            onBack={handleBack}
            onSelectMovie={handleSelectMovie}
          />
        );

      case 'states-showcase':
        return <PreviewStatesPage />;

      default:
        return (
          <HomePage
            onSelectMovie={handleSelectMovie}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return (
    <div className="sf-app-root">
      {/* Top Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        watchlistCount={WATCHLIST_MOVIES.length}
      />

      {/* Main Page Body */}
      <main id="main-content" className="sf-main-content">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
