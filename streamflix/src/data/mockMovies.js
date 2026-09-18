/**
 * Streamflix Mock Movie Data
 * Structured similarly to TMDB API responses for easy future integration.
 * All data is isolated in this module and can be replaced with real API fetching later.
 */

export const GENRES = [
  'All Genres',
  'Action',
  'Sci-Fi',
  'Adventure',
  'Drama',
  'Thriller',
  'Fantasy',
  'Animation',
  'Crime',
  'Mystery',
  'Horror',
  'Comedy',
];

export const RELEASE_YEARS = [
  'All Years',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
  '2010s',
  'Classic',
];

export const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Most Popular' },
  { value: 'rating.desc', label: 'Highest Rated' },
  { value: 'release_date.desc', label: 'Newest Releases' },
  { value: 'title.asc', label: 'Title (A-Z)' },
];

export const MOCK_MOVIES = [
  {
    id: 'm1',
    title: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
    rating: 8.8,
    voteCount: 38410,
    releaseDate: '2024-03-01',
    year: 2024,
    runtime: '2h 46m',
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    language: 'English',
    badge: 'Trending #1',
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Timothée Chalamet', character: 'Paul Atreides', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Zendaya', character: 'Chani', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
      { name: 'Rebecca Ferguson', character: 'Lady Jessica', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Javier Bardem', character: 'Stilgar', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Austin Butler', character: 'Feyd-Rautha Harkonnen', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Denis Villeneuve', role: 'Director & Screenplay' },
      { name: 'Greig Fraser', role: 'Director of Photography' },
      { name: 'Hans Zimmer', role: 'Original Music Score' },
      { name: 'Joe Walker', role: 'Film Editor' }
    ],
    production: {
      budget: '$190,000,000',
      revenue: '$714,400,000',
      studio: 'Legendary Pictures / Warner Bros.',
      status: 'Released'
    }
  },
  {
    id: 'm2',
    title: 'Oppenheimer',
    tagline: 'The world forever changes.',
    overview:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during the Manhattan Project, examining the moral weight and devastating power unleashed on the world.',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    rating: 8.9,
    voteCount: 42100,
    releaseDate: '2023-07-21',
    year: 2023,
    runtime: '3h 00m',
    genres: ['Drama', 'History', 'Biography'],
    language: 'English',
    badge: 'Oscar Winner',
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Cillian Murphy', character: 'J. Robert Oppenheimer', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Emily Blunt', character: 'Kitty Oppenheimer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
      { name: 'Robert Downey Jr.', character: 'Lewis Strauss', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Florence Pugh', character: 'Jean Tatlock', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Christopher Nolan', role: 'Director & Writer' },
      { name: 'Hoyte van Hoytema', role: 'Director of Photography' },
      { name: 'Ludwig Göransson', role: 'Composer' }
    ],
    production: {
      budget: '$100,000,000',
      revenue: '$957,000,000',
      studio: 'Syncopy / Universal Pictures',
      status: 'Released'
    }
  },
  {
    id: 'm3',
    title: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    overview:
      'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    poster: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80',
    rating: 8.7,
    voteCount: 52000,
    releaseDate: '2014-11-07',
    year: 2014,
    runtime: '2h 49m',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    language: 'English',
    badge: 'Top Rated',
    isTrending: false,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: false,
    cast: [
      { name: 'Matthew McConaughey', character: 'Cooper', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Anne Hathaway', character: 'Brand', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Jessica Chastain', character: 'Murph', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Christopher Nolan', role: 'Director' },
      { name: 'Jonathan Nolan', role: 'Screenplay' },
      { name: 'Hans Zimmer', role: 'Composer' }
    ],
    production: {
      budget: '$165,000,000',
      revenue: '$701,729,206',
      studio: 'Paramount Pictures / Warner Bros.',
      status: 'Released'
    }
  },
  {
    id: 'm4',
    title: 'Cyberpunk: Neon Horizon',
    tagline: 'In the shadows of the future, rebellion is code.',
    overview:
      'In a rain-drenched megacity controlled by shadowy tech syndicates, a rogue memory broker uncovers a conspiracy that alters the synthetic consciousness of millions. Together with an exiled cybernetic detective, they race against an unstoppable corporate kill-squad.',
    poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    rating: 8.3,
    voteCount: 18450,
    releaseDate: '2024-05-18',
    year: 2024,
    runtime: '2h 18m',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    language: 'English',
    badge: '4K HDR',
    isTrending: true,
    isPopular: true,
    isTopRated: false,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Alexander Vance', character: 'Kaelen Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Elena Rostova', character: 'Mira Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Marcus Sterling', role: 'Director' },
      { name: 'Clara Oswald', role: 'Production Designer' }
    ],
    production: {
      budget: '$140,000,000',
      revenue: '$385,000,000',
      studio: 'Neon Core Studios',
      status: 'Released'
    }
  },
  {
    id: 'm5',
    title: 'Echoes of the Abyss',
    tagline: 'Deep below, silence speaks louder than screams.',
    overview:
      'A deep-sea research expedition to the Mariana Trench investigates mysterious rhythmic seismic tremors. What they discover is an ancient subterranean biosphere that possesses terrifying bio-luminescent intelligence.',
    poster: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80',
    rating: 7.9,
    voteCount: 12900,
    releaseDate: '2024-06-20',
    year: 2024,
    runtime: '2h 05m',
    genres: ['Horror', 'Mystery', 'Sci-Fi'],
    language: 'English',
    badge: 'New',
    isTrending: true,
    isPopular: false,
    isTopRated: false,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: false,
    cast: [
      { name: 'Sarah Lin', character: 'Dr. Evelyn Ward', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'David Mercer', character: 'Captain Robert Hayes', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Guillermo Vance', role: 'Director' },
      { name: 'Lars Mikkelsen', role: 'Composer' }
    ],
    production: {
      budget: '$75,000,000',
      revenue: '$198,000,000',
      studio: 'Abyss Filmworks',
      status: 'Released'
    }
  },
  {
    id: 'm6',
    title: 'The Dark Knight',
    tagline: 'Welcome to a world without rules.',
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80',
    rating: 9.0,
    voteCount: 68000,
    releaseDate: '2008-07-18',
    year: 2008,
    runtime: '2h 32m',
    genres: ['Action', 'Crime', 'Drama'],
    language: 'English',
    badge: 'Top 10 All-Time',
    isTrending: false,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Christian Bale', character: 'Bruce Wayne / Batman', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Heath Ledger', character: 'Joker', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
      { name: 'Michael Caine', character: 'Alfred Pennyworth', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Christopher Nolan', role: 'Director & Screenplay' },
      { name: 'Wally Pfister', role: 'Cinematographer' }
    ],
    production: {
      budget: '$185,000,000',
      revenue: '$1,006,000,000',
      studio: 'Warner Bros. / DC Comics',
      status: 'Released'
    }
  },
  {
    id: 'm7',
    title: 'Quantum Drift',
    tagline: 'Time is the ultimate speedway.',
    overview:
      'In a high-octane speculative thriller, experimental hyperspace racers discover that their warp engines tear through parallel realities, pitting rival crews against alternate versions of their own destiny across infinite timelines.',
    poster: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80',
    rating: 7.7,
    voteCount: 9400,
    releaseDate: '2024-08-14',
    year: 2024,
    runtime: '1h 58m',
    genres: ['Action', 'Sci-Fi', 'Adventure'],
    language: 'English',
    badge: 'Trending',
    isTrending: true,
    isPopular: true,
    isTopRated: false,
    isUpcoming: false,
    isRecommended: false,
    isWatchlisted: false,
    cast: [
      { name: 'Leo Thorne', character: 'Jaxen Cruz', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Aria Bennett', character: 'Cipher Valen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Tarek Al-Mansoor', role: 'Director' }
    ],
    production: {
      budget: '$90,000,000',
      revenue: '$210,000,000',
      studio: 'Apex Cinematic',
      status: 'Released'
    }
  },
  {
    id: 'm8',
    title: 'The Last Sentinel',
    tagline: 'When the machines slumber, one guardian stands awake.',
    overview:
      'On an abandoned terraforming outpost on Titan, an isolated bio-engineered sentinel maintains planetary atmospheric generators while deciphering an alien transmission destined for an extinct Earth.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    rating: 8.1,
    voteCount: 14200,
    releaseDate: '2024-04-10',
    year: 2024,
    runtime: '2h 12m',
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    language: 'English',
    badge: '4K UHD',
    isTrending: false,
    isPopular: true,
    isTopRated: false,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: false,
    cast: [
      { name: 'Rikard Nord', character: 'Unit 7-B', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Sofia Lindqvist', role: 'Director' }
    ],
    production: {
      budget: '$45,000,000',
      revenue: '$112,000,000',
      studio: 'Nordic Horizon',
      status: 'Released'
    }
  },
  {
    id: 'm9',
    title: 'Solaris Rising: 2025',
    tagline: 'Dawn approaches beyond the solar frontier.',
    overview:
      'A coalition of human colonies in the asteroid belt navigates rising political brinkmanship as a newly emerged cosmic gravitational anomaly threatens to collapse the inner system orbital mechanics.',
    poster: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
    rating: 8.5,
    voteCount: 6500,
    releaseDate: '2025-05-15',
    year: 2025,
    runtime: '2h 35m',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    language: 'English',
    badge: 'Upcoming',
    isTrending: false,
    isPopular: false,
    isTopRated: false,
    isUpcoming: true,
    isRecommended: false,
    isWatchlisted: false,
    cast: [
      { name: 'Caleb Rhodes', character: 'Commander Miller', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Amara Kalu', role: 'Director' }
    ],
    production: {
      budget: '$160,000,000',
      revenue: '$0',
      studio: 'Astra Lumina',
      status: 'Post-Production'
    }
  },
  {
    id: 'm10',
    title: 'Shadows of Kyoto',
    tagline: 'Honor is carved in silence.',
    overview:
      'Set against the neon-lit backdrop of modern Kyoto and feudal shadow clans, a master bladesmith must recover a stolen ancestral relic that holds biological secrets of dynastic lineages.',
    poster: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80',
    rating: 8.4,
    voteCount: 16800,
    releaseDate: '2024-02-14',
    year: 2024,
    runtime: '2h 10m',
    genres: ['Action', 'Crime', 'Thriller'],
    language: 'Japanese',
    badge: 'Top Rated',
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Kenji Sato', character: 'Ren Takahashi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Aoi Miyazaki', character: 'Kaori Endo', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Takashi Yamazaki', role: 'Director' }
    ],
    production: {
      budget: '$50,000,000',
      revenue: '$145,000,000',
      studio: 'Toho / Kyoto Cinema',
      status: 'Released'
    }
  },
  {
    id: 'm11',
    title: 'Chronicles of Eldoria',
    tagline: 'When myth awakens, kingdoms fall.',
    overview:
      'In a mythical realm on the verge of eternal winter, an exiled sorceress and a disgraced knight uncover the slumbering dragon heart capable of rekindling the world forge or incinerating civilization.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80',
    rating: 7.8,
    voteCount: 11200,
    releaseDate: '2025-07-04',
    year: 2025,
    runtime: '2h 24m',
    genres: ['Fantasy', 'Adventure', 'Action'],
    language: 'English',
    badge: 'Upcoming',
    isTrending: false,
    isPopular: false,
    isTopRated: false,
    isUpcoming: true,
    isRecommended: false,
    isWatchlisted: false,
    cast: [
      { name: 'Gwendoline Shaw', character: 'Lady Morveth', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Alastair Campbell', role: 'Director' }
    ],
    production: {
      budget: '$180,000,000',
      revenue: '$0',
      studio: 'Mythic Entertainment',
      status: 'Post-Production'
    }
  },
  {
    id: 'm12',
    title: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    overview:
      'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person\'s idea into a target\'s subconscious.',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    rating: 8.8,
    voteCount: 65400,
    releaseDate: '2010-07-16',
    year: 2010,
    runtime: '2h 28m',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    language: 'English',
    badge: 'Classic',
    isTrending: false,
    isPopular: true,
    isTopRated: true,
    isUpcoming: false,
    isRecommended: true,
    isWatchlisted: true,
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Dom Cobb', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Joseph Gordon-Levitt', character: 'Arthur', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Elliot Page', character: 'Ariadne', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
    ],
    crew: [
      { name: 'Christopher Nolan', role: 'Director & Screenplay' }
    ],
    production: {
      budget: '$160,000,000',
      revenue: '$836,800,000',
      studio: 'Syncopy / Warner Bros.',
      status: 'Released'
    }
  }
];

// Helper subsets to populate predefined UI sections cleanly
export const FEATURED_HERO_MOVIE = MOCK_MOVIES[0]; // Dune: Part Two
export const TRENDING_MOVIES = MOCK_MOVIES.filter((m) => m.isTrending);
export const POPULAR_MOVIES = MOCK_MOVIES.filter((m) => m.isPopular);
export const TOP_RATED_MOVIES = MOCK_MOVIES.filter((m) => m.isTopRated);
export const UPCOMING_MOVIES = MOCK_MOVIES.filter((m) => m.isUpcoming);
export const RECOMMENDED_MOVIES = MOCK_MOVIES.filter((m) => m.isRecommended);
export const WATCHLIST_MOVIES = MOCK_MOVIES.filter((m) => m.isWatchlisted);
