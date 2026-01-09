import React, { useState, useEffect } from 'react';
import Leaderboard from './components/Leaderboard';
import UserProfile from './components/UserProfile';
import TrendingWikis from './components/TrendingWikis';
import './App.css';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Auto-update functionality - simulates real-time updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      import('./data/mockData').then(({ api }) => {
        api.simulateUpdate();
        setLastUpdate(new Date());
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    // Scroll to profile section
    setTimeout(() => {
      document.getElementById('user-profile-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleCloseProfile = () => {
    setSelectedUserId(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <h1 className="app-title">
              <span className="title-icon">📊</span>
              Wiki Metrics Dashboard
            </h1>
            <p className="app-subtitle">Track contributions, engagement, and achievements</p>
          </div>
          <div className="header-meta">
            <span className="last-update">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="trending-section">
            <TrendingWikis onUserSelect={handleUserSelect} updateTrigger={lastUpdate.getTime()} />
          </section>

          <section className="leaderboard-section">
            <Leaderboard onUserSelect={handleUserSelect} key={lastUpdate.getTime()} />
          </section>

          {selectedUserId && (
            <section id="user-profile-section" className="profile-section">
              <UserProfile userId={selectedUserId} onClose={handleCloseProfile} />
            </section>
          )}

          <section className="info-section">
            <div className="info-card">
              <h3>🏆 How Rankings Work</h3>
              <p>
                Users are ranked based on multiple metrics including wikis authored, 
                agent hits, total views, and an overall engagement score. Click on any 
                column header to sort by that metric.
              </p>
            </div>
            <div className="info-card">
              <h3>🎖️ Earning Badges</h3>
              <p>
                Badges are automatically awarded when you reach milestones:
              </p>
              <ul>
                <li><strong>First Wiki</strong> - Author your first wiki</li>
                <li><strong>Contributor</strong> - Author 10 wikis</li>
                <li><strong>Prolific Author</strong> - Author 50 wikis</li>
                <li><strong>Wiki Master</strong> - Author 100 wikis</li>
                <li><strong>Highly Engaged</strong> - Reach 10,000 total views</li>
                <li><strong>Top Contributor</strong> - Rank in top 10</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>📈 Engagement Score</h3>
              <p>
                The engagement score is calculated based on a weighted combination of 
                total views (60%) and agent hits (40%), providing a comprehensive measure 
                of your content's impact and usefulness.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>Wiki Metrics Dashboard - Real-time contribution tracking</p>
          <p className="footer-note">Data updates automatically every 30 seconds</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

