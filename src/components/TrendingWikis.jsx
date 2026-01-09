import React, { useState, useEffect } from 'react';
import './TrendingWikis.css';

const TrendingWikis = ({ onUserSelect, updateTrigger }) => {
  const [wikis, setWikis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrendingWikis();
  }, [updateTrigger]);

  const loadTrendingWikis = async () => {
    setLoading(true);
    const { api } = await import('../data/mockData');
    const data = await api.getTrendingWikis(10);
    setWikis(data);
    setLoading(false);
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const formatDate = (date) => {
    const now = new Date();
    const updated = new Date(date);
    const diffTime = Math.abs(now - updated);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return updated.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getTrendingBadge = (index) => {
    if (index === 0) return { icon: '🔥', label: 'Hot', class: 'hot' };
    if (index === 1) return { icon: '⚡', label: 'Rising', class: 'rising' };
    if (index === 2) return { icon: '✨', label: 'Popular', class: 'popular' };
    return { icon: '📈', label: 'Trending', class: 'trending' };
  };

  return (
    <div className="trending-wikis">
      <div className="trending-header">
        <h2>🔥 Trending Wikis</h2>
        <p className="trending-subtitle">Most popular and recently updated content</p>
      </div>

      <div className="trending-content">
        {loading ? (
          <div className="trending-loading">Loading trending wikis...</div>
        ) : (
          <div className="trending-grid">
            {wikis.map((wiki, index) => {
              const badge = getTrendingBadge(index);
              return (
                <div key={wiki.id} className="trending-card">
                  <div className="trending-card-header">
                    <div className="trending-rank">#{index + 1}</div>
                    <div className={`trending-badge ${badge.class}`}>
                      <span className="badge-icon">{badge.icon}</span>
                      <span className="badge-label">{badge.label}</span>
                    </div>
                  </div>

                  <h3 className="trending-title">{wiki.title}</h3>

                  <div className="trending-author" onClick={() => onUserSelect(wiki.authorId)}>
                    <img src={wiki.authorAvatar} alt={wiki.author} className="author-avatar" />
                    <div className="author-info">
                      <span className="author-name">{wiki.author}</span>
                      <span className="author-username">@{wiki.authorUsername}</span>
                    </div>
                  </div>

                  <div className="trending-stats">
                    <div className="stat-item">
                      <span className="stat-icon">👁️</span>
                      <span className="stat-value">{formatNumber(wiki.views)}</span>
                      <span className="stat-label">views</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🤖</span>
                      <span className="stat-value">{formatNumber(wiki.agentHits)}</span>
                      <span className="stat-label">hits</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">📊</span>
                      <span className="stat-value">{formatNumber(wiki.trendingScore)}</span>
                      <span className="stat-label">score</span>
                    </div>
                  </div>

                  <div className="trending-footer">
                    <span className="update-time">Updated {formatDate(wiki.lastUpdated)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingWikis;

