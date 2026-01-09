import React, { useState, useEffect } from 'react';
import { BadgeList } from './Badge';
import './Leaderboard.css';

const Leaderboard = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('engagement');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, [sortBy]);

  const loadLeaderboard = async () => {
    setLoading(true);
    const { api } = await import('../data/mockData');
    const data = await api.getLeaderboard(sortBy);
    setUsers(data);
    setLoading(false);
  };

  const handleSort = (field) => {
    setSortBy(field);
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const getRankMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2>🏆 Leaderboard</h2>
        <p className="leaderboard-subtitle">Top contributors ranked by their impact</p>
      </div>

      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th className="rank-column">Rank</th>
              <th className="user-column">User</th>
              <th 
                className={`sortable ${sortBy === 'wikisAuthored' ? 'active' : ''}`}
                onClick={() => handleSort('wikisAuthored')}
              >
                Wikis Authored
                {sortBy === 'wikisAuthored' && <span className="sort-indicator">▼</span>}
              </th>
              <th 
                className={`sortable ${sortBy === 'agentHits' ? 'active' : ''}`}
                onClick={() => handleSort('agentHits')}
              >
                Agent Hits
                {sortBy === 'agentHits' && <span className="sort-indicator">▼</span>}
              </th>
              <th 
                className={`sortable ${sortBy === 'totalViews' ? 'active' : ''}`}
                onClick={() => handleSort('totalViews')}
              >
                Total Views
                {sortBy === 'totalViews' && <span className="sort-indicator">▼</span>}
              </th>
              <th 
                className={`sortable ${sortBy === 'engagement' ? 'active' : ''}`}
                onClick={() => handleSort('engagement')}
              >
                Engagement Score
                {sortBy === 'engagement' && <span className="sort-indicator">▼</span>}
              </th>
              <th className="badges-column">Badges</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="loading-cell">Loading...</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr 
                  key={user.id} 
                  className="user-row"
                  onClick={() => onUserSelect(user.id)}
                >
                  <td className="rank-column">
                    <span className="rank">{getRankMedal(index + 1)}</span>
                  </td>
                  <td className="user-column">
                    <div className="user-info">
                      <img src={user.avatar} alt={user.name} className="user-avatar" />
                      <div className="user-details">
                        <span className="user-name">{user.name}</span>
                        <span className="user-username">@{user.username}</span>
                      </div>
                    </div>
                  </td>
                  <td className="metric-cell">
                    <span className="metric-value">{formatNumber(user.wikisAuthored)}</span>
                  </td>
                  <td className="metric-cell">
                    <span className="metric-value">{formatNumber(user.agentHits)}</span>
                  </td>
                  <td className="metric-cell">
                    <span className="metric-value">{formatNumber(user.totalViews)}</span>
                  </td>
                  <td className="metric-cell">
                    <span className="metric-value engagement-score">{formatNumber(user.engagement)}</span>
                  </td>
                  <td className="badges-column">
                    <BadgeList badges={user.badges} size="small" maxDisplay={3} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;

