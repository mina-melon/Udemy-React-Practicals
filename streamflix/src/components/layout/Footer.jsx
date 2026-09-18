import React from 'react';
import Logo from '../common/Logo';
import './Footer.css';

export default function Footer({ onNavigate = () => {} }) {
  return (
    <footer className="sf-footer">
      <div className="sf-footer-container container">
        {/* Top Section */}
        <div className="sf-footer-top">
          <div className="sf-footer-brand">
            <Logo size="md" onClick={() => onNavigate('home')} />
            <p className="sf-footer-tagline">
              Discover cinematic stories, explore award-winning titles, and curate your personalized watchlist.
            </p>
            <div className="sf-footer-socials">
              <a href="#twitter" className="sf-social-link" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#instagram" className="sf-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#youtube" className="sf-social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#github" className="sf-social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="sf-footer-columns">
            <div className="sf-footer-col">
              <h4 className="sf-footer-col-title">Navigation</h4>
              <ul className="sf-footer-col-links">
                <li><button type="button" onClick={() => onNavigate('home')}>Home</button></li>
                <li><button type="button" onClick={() => onNavigate('discover')}>Discover</button></li>
                <li><button type="button" onClick={() => onNavigate('popular')}>Popular Movies</button></li>
                <li><button type="button" onClick={() => onNavigate('top-rated')}>Top Rated</button></li>
                <li><button type="button" onClick={() => onNavigate('upcoming')}>Upcoming Releases</button></li>
                <li><button type="button" onClick={() => onNavigate('watchlist')}>My Watchlist</button></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4 className="sf-footer-col-title">Categories</h4>
              <ul className="sf-footer-col-links">
                <li><button type="button" onClick={() => onNavigate('discover')}>Action & Adventure</button></li>
                <li><button type="button" onClick={() => onNavigate('discover')}>Sci-Fi & Cyberpunk</button></li>
                <li><button type="button" onClick={() => onNavigate('discover')}>Psychological Thriller</button></li>
                <li><button type="button" onClick={() => onNavigate('discover')}>Cinema Classics</button></li>
                <li><button type="button" onClick={() => onNavigate('discover')}>Anime & Animation</button></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4 className="sf-footer-col-title">Company</h4>
              <ul className="sf-footer-col-links">
                <li><a href="#about">About Streamflix</a></li>
                <li><a href="#contact">Contact Support</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookie-settings">Cookie Preferences</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sf-footer-bottom">
          <p className="sf-footer-copyright">
            &copy; {new Date().getFullYear()} Streamflix Inc. All rights reserved. Designed for movie lovers.
          </p>
          <p className="sf-footer-note">
            Cinematic interface built with React & modern CSS. Ready for API integration.
          </p>
        </div>
      </div>
    </footer>
  );
}
