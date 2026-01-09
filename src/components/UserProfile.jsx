import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BadgeList } from './Badge';
import ShareModal from './ShareModal';
import './UserProfile.css';

const UserProfile = ({ userId, onClose }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    loadUserProfile();
  }, [userId]);

  const loadUserProfile = async () => {
    setLoading(true);
    const { api } = await import('../data/mockData');
    const data = await api.getUserProfile(userId);
    setUser(data);
    setLoading(false);
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleShareToLinkedIn = () => {
    setShowShareModal(true);
  };

  const handleConfirmShare = () => {
    // Generate achievement summary
    const badgeNames = user.badges.map(b => b.name).join(', ');
    const postText = `🎉 Excited to share my latest achievements on the Wiki Metrics Dashboard!\n\n` +
      `📊 My Stats:\n` +
      `📚 ${formatNumber(user.wikisAuthored)} Wikis Authored\n` +
      `👁️ ${formatNumber(user.totalViews)} Total Views\n` +
      `🤖 ${formatNumber(user.agentHits)} Agent Hits\n` +
      `⭐ ${formatNumber(user.engagement)} Engagement Score\n\n` +
      `🎖️ Badges Earned: ${badgeNames}\n\n` +
      `#WikiContributor #KnowledgeSharing #TechCommunity`;

    // LinkedIn share URL (using LinkedIn's share URL format)
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;

    // Copy to clipboard and open LinkedIn
    navigator.clipboard.writeText(postText).then(() => {
      setShowShareModal(false);
      alert('✅ Achievement text copied to clipboard!\n\nOpening LinkedIn... Paste the text into your post.');
      window.open(linkedInUrl, '_blank');
    }).catch(() => {
      // Fallback if clipboard API fails
      setShowShareModal(false);
      alert('Opening LinkedIn share dialog...\n\nPost text:\n\n' + postText);
      window.open(linkedInUrl, '_blank');
    });
  };

  if (loading) {
    return (
      <div className="user-profile">
        <div className="profile-loading">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="user-profile">
        <div className="profile-error">User not found</div>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="profile-hero">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-username">@{user.username}</p>
            <p className="profile-join-date">Member since {formatDate(user.joinDate)}</p>
          </div>
        </div>
        <div className="profile-badges">
          <div className="badges-header">
            <h3>Badges ({user.badges.length})</h3>
            <button className="linkedin-share-btn" onClick={handleShareToLinkedIn}>
              <span className="linkedin-icon">in</span>
              Share to LinkedIn
            </button>
          </div>
          <BadgeList badges={user.badges} size="large" />
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-value">{formatNumber(user.wikisAuthored)}</div>
            <div className="stat-label">Wikis Authored</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-content">
            <div className="stat-value">{formatNumber(user.totalViews)}</div>
            <div className="stat-label">Total Views</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <div className="stat-content">
            <div className="stat-value">{formatNumber(user.agentHits)}</div>
            <div className="stat-label">Agent Hits</div>
          </div>
        </div>
        <div className="stat-card highlight">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{formatNumber(user.engagement)}</div>
            <div className="stat-label">Engagement Score</div>
          </div>
        </div>
      </div>

      <div className="profile-charts">
        <div className="chart-container">
          <h3>Engagement Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={user.engagementMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6a737c" />
              <YAxis stroke="#6a737c" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #d6d9dc',
                  borderRadius: '4px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#0a95ff" strokeWidth={2} name="Views" />
              <Line type="monotone" dataKey="agentHits" stroke="#f48024" strokeWidth={2} name="Agent Hits" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Monthly Wiki Creation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={user.engagementMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#6a737c" />
              <YAxis stroke="#6a737c" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #d6d9dc',
                  borderRadius: '4px'
                }}
              />
              <Bar dataKey="wikisCreated" fill="#5eba7d" name="Wikis Created" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recent-wikis">
        <h3>Recent Wiki Contributions</h3>
        <div className="wiki-list">
          {user.recentWikis.map((wiki) => (
            <div key={wiki.id} className="wiki-item">
              <div className="wiki-header">
                <h4 className="wiki-title">{wiki.title}</h4>
                <span className="wiki-date">{formatDate(wiki.createdAt)}</span>
              </div>
              <div className="wiki-stats">
                <span className="wiki-stat">
                  <span className="wiki-stat-icon">👁️</span>
                  {formatNumber(wiki.views)} views
                </span>
                <span className="wiki-stat">
                  <span className="wiki-stat-icon">🤖</span>
                  {formatNumber(wiki.agentHits)} agent hits
                </span>
                <span className="wiki-stat-secondary">
                  Updated {formatDate(wiki.lastUpdated)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showShareModal && (
        <ShareModal
          user={user}
          onClose={() => setShowShareModal(false)}
          onConfirm={handleConfirmShare}
        />
      )}
    </div>
  );
};

export default UserProfile;

