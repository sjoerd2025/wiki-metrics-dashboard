// Badge definitions
export const BADGES = {
  FIRST_WIKI: {
    id: 'first_wiki',
    name: 'First Wiki',
    description: 'Authored your first wiki',
    icon: '📝',
    tier: 'bronze'
  },
  WIKI_10: {
    id: 'wiki_10',
    name: 'Contributor',
    description: 'Authored 10 wikis',
    icon: '📚',
    tier: 'bronze'
  },
  WIKI_50: {
    id: 'wiki_50',
    name: 'Prolific Author',
    description: 'Authored 50 wikis',
    icon: '✍️',
    tier: 'silver'
  },
  WIKI_100: {
    id: 'wiki_100',
    name: 'Wiki Master',
    description: 'Authored 100 wikis',
    icon: '🏆',
    tier: 'gold'
  },
  HIGH_ENGAGEMENT: {
    id: 'high_engagement',
    name: 'Highly Engaged',
    description: 'Reached 10,000 total views',
    icon: '⭐',
    tier: 'silver'
  },
  TOP_CONTRIBUTOR: {
    id: 'top_contributor',
    name: 'Top Contributor',
    description: 'Ranked in top 10 contributors',
    icon: '👑',
    tier: 'gold'
  }
};

// Generate mock users with realistic data
export const generateMockUsers = () => {
  const names = [
    'Alice Johnson', 'Bob Smith', 'Carol Williams', 'David Brown', 'Emma Davis',
    'Frank Miller', 'Grace Wilson', 'Henry Moore', 'Ivy Taylor', 'Jack Anderson',
    'Kate Thomas', 'Liam Jackson', 'Mia White', 'Noah Harris', 'Olivia Martin'
  ];

  return names.map((name, index) => {
    const wikisAuthored = Math.floor(Math.random() * 150) + 1;
    const totalViews = Math.floor(Math.random() * 50000) + 100;
    const agentHits = Math.floor(Math.random() * 10000) + 50;
    const engagement = Math.floor((totalViews * 0.6 + agentHits * 0.4) / 10);
    
    // Calculate badges
    const badges = [];
    if (wikisAuthored >= 1) badges.push(BADGES.FIRST_WIKI);
    if (wikisAuthored >= 10) badges.push(BADGES.WIKI_10);
    if (wikisAuthored >= 50) badges.push(BADGES.WIKI_50);
    if (wikisAuthored >= 100) badges.push(BADGES.WIKI_100);
    if (totalViews >= 10000) badges.push(BADGES.HIGH_ENGAGEMENT);
    if (index < 10) badges.push(BADGES.TOP_CONTRIBUTOR);

    return {
      id: index + 1,
      name,
      username: name.toLowerCase().replace(' ', '_'),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      wikisAuthored,
      totalViews,
      agentHits,
      engagement,
      badges,
      joinDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
      recentWikis: generateRecentWikis(wikisAuthored, index + 1)
    };
  });
};

// Wiki topics pool
const WIKI_TOPICS = [
  'React Hooks', 'API Integration', 'Database Design', 'Authentication',
  'State Management', 'Performance Optimization', 'Testing Strategies',
  'Deployment Guide', 'Security Best Practices', 'Code Review Process',
  'GraphQL Basics', 'Docker Containers', 'CI/CD Pipeline', 'Microservices Architecture',
  'TypeScript Advanced', 'Web Accessibility', 'SEO Optimization', 'Progressive Web Apps',
  'WebSocket Implementation', 'OAuth 2.0 Flow', 'Redis Caching', 'MongoDB Aggregation',
  'Kubernetes Deployment', 'AWS Lambda Functions', 'Git Workflows', 'Agile Methodologies'
];

// Generate recent wikis for a user
const generateRecentWikis = (count, userId) => {
  const numRecent = Math.min(5, count);
  return Array.from({ length: numRecent }, (_, i) => ({
    id: `wiki_${userId}_${i}`,
    title: WIKI_TOPICS[Math.floor(Math.random() * WIKI_TOPICS.length)],
    views: Math.floor(Math.random() * 5000) + 10,
    agentHits: Math.floor(Math.random() * 1000) + 5,
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
    lastUpdated: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
  }));
};

// Generate all wikis from all users for trending
const generateAllWikis = () => {
  const allWikis = [];
  mockUsers.forEach(user => {
    user.recentWikis.forEach(wiki => {
      allWikis.push({
        ...wiki,
        author: user.name,
        authorId: user.id,
        authorAvatar: user.avatar,
        authorUsername: user.username,
        // Calculate trending score based on recent activity
        trendingScore: calculateTrendingScore(wiki)
      });
    });
  });
  return allWikis;
};

// Calculate trending score (higher for recent, high-engagement wikis)
const calculateTrendingScore = (wiki) => {
  const daysSinceUpdate = (Date.now() - new Date(wiki.lastUpdated).getTime()) / (1000 * 60 * 60 * 24);
  const recencyBoost = Math.max(0, 30 - daysSinceUpdate) / 30; // Higher score for recent updates
  const engagementScore = (wiki.views * 0.6 + wiki.agentHits * 0.4);
  return Math.floor(engagementScore * (1 + recencyBoost));
};

// Generate engagement metrics over time
export const generateEngagementMetrics = (userId) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  
  return Array.from({ length: 12 }, (_, i) => {
    const monthIndex = (currentMonth - 11 + i + 12) % 12;
    return {
      month: months[monthIndex],
      views: Math.floor(Math.random() * 2000) + 100,
      agentHits: Math.floor(Math.random() * 500) + 20,
      wikisCreated: Math.floor(Math.random() * 5)
    };
  });
};

// Initial mock data
let mockUsers = generateMockUsers();

// Simulated API
export const api = {
  getLeaderboard: (sortBy = 'engagement') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sorted = [...mockUsers].sort((a, b) => b[sortBy] - a[sortBy]);
        resolve(sorted);
      }, 300);
    });
  },

  getUserProfile: (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.id === userId);
        if (user) {
          resolve({
            ...user,
            engagementMetrics: generateEngagementMetrics(userId)
          });
        } else {
          resolve(null);
        }
      }, 300);
    });
  },

  getTrendingWikis: (limit = 10) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allWikis = generateAllWikis();
        const trending = allWikis
          .sort((a, b) => b.trendingScore - a.trendingScore)
          .slice(0, limit);
        resolve(trending);
      }, 300);
    });
  },

  // Simulate real-time updates
  simulateUpdate: () => {
    mockUsers = mockUsers.map(user => ({
      ...user,
      totalViews: user.totalViews + Math.floor(Math.random() * 10),
      agentHits: user.agentHits + Math.floor(Math.random() * 5),
      engagement: Math.floor((user.totalViews * 0.6 + user.agentHits * 0.4) / 10),
      recentWikis: user.recentWikis.map(wiki => ({
        ...wiki,
        views: wiki.views + Math.floor(Math.random() * 5),
        agentHits: wiki.agentHits + Math.floor(Math.random() * 3)
      }))
    }));
  }
};

