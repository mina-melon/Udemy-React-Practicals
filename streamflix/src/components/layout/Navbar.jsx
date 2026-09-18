import React, { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import { SearchIcon, UserIcon, MenuIcon, CloseIcon } from '../common/Icons';
import './Navbar.css';

export default function Navbar({
  activePage = 'home',
  onNavigate = () => {},
  watchlistCount = 0,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'discover', label: 'Discover' },
    { id: 'popular', label: 'Popular' },
    { id: 'top-rated', label: 'Top Rated' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'watchlist', label: 'Watchlist', badge: watchlistCount > 0 ? watchlistCount : null },
    { id: 'states-showcase', label: 'UI States', isDemo: true },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sf-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="sf-header-container container">
        {/* Brand Logo */}
        <div className="sf-header-left">
          <Logo onClick={() => handleNavClick('home')} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="sf-nav-desktop" aria-label="Main Navigation">
          <ul className="sf-nav-list">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="sf-nav-item">
                  <button
                    type="button"
                    className={`sf-nav-link ${isActive ? 'is-active' : ''} ${
                      item.isDemo ? 'is-demo-pill' : ''
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                    {item.badge && <span className="sf-nav-badge">{item.badge}</span>}
                    {isActive && <span className="sf-nav-active-bar" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="sf-header-right">
          {/* Search Trigger Button */}
          <button
            type="button"
            className="sf-header-action-btn sf-search-btn"
            aria-label="Search movies"
            title="Search movies"
            onClick={() => handleNavClick('discover')}
          >
            <SearchIcon size={20} />
            <span className="sf-search-hint">Search movies...</span>
          </button>

          {/* User Profile Avatar */}
          <div className="sf-user-menu-wrapper">
            <button
              type="button"
              className="sf-avatar-btn"
              aria-label="User profile"
              title="User Account"
            >
              <div className="sf-avatar-image">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
                  alt="User Avatar"
                  onError={(e) => {
                    // Fallback to icon if remote image is unreachable
                    e.target.style.display = 'none';
                  }}
                />
                <UserIcon size={18} className="sf-avatar-fallback-icon" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            className="sf-mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sf-mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="sf-mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="sf-mobile-menu-header">
              <Logo size="sm" onClick={() => handleNavClick('home')} />
              <button
                type="button"
                className="sf-mobile-close-btn"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <ul className="sf-mobile-nav-list">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`sf-mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="sf-nav-badge">{item.badge}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="sf-mobile-user-row">
              <div className="sf-mobile-user-avatar">
                <UserIcon size={20} />
              </div>
              <div className="sf-mobile-user-info">
                <span className="sf-mobile-username">Cinemaphile</span>
                <span className="sf-mobile-user-plan">Streamflix Premium</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
