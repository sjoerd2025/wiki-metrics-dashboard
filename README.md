# 📊 Wiki Metrics Dashboard

A modern, responsive web application for tracking user contributions and engagement metrics for wiki content. Built with React and Vite, featuring real-time updates and a clean design inspired by StackOverflow.

## ✨ Features

### 🔥 Trending Wikis
- **Smart Trending Algorithm**: Ranks wikis based on recent activity and engagement
- **Visual Indicators**: Hot 🔥, Rising ⚡, Popular ✨, and Trending 📈 badges
- **Comprehensive Metrics**:
  - View counts
  - Agent hits
  - Trending score
- **Author Information**: Quick access to author profiles
- **Real-time Updates**: Automatically refreshes with new data
- **Responsive Grid**: Adapts to all screen sizes

### 🏆 Leaderboard
- **Sortable Rankings**: Click any column header to sort users by:
  - Number of Wikis authored
  - Agent hits (usage by AI agents)
  - Total views
  - Overall engagement score
- **Visual Rankings**: Top 3 users displayed with medal emojis (🥇🥈🥉)
- **User Avatars**: Unique avatar for each user
- **Badge Display**: Quick view of user achievements

### 👤 User Profile Section
- **Comprehensive Statistics**:
  - Total wikis authored
  - Total views
  - Agent hits
  - Engagement score
- **Interactive Charts**:
  - Engagement over time (line chart)
  - Monthly wiki creation (bar chart)
- **Recent Contributions**: List of user's latest wiki articles with metrics
- **Badge Showcase**: All earned badges displayed prominently
- **LinkedIn Sharing**: Share achievements directly to LinkedIn with one click

### 🎖️ Badge System
Automatic badge awards for milestones:
- **📝 First Wiki** (Bronze) - Author your first wiki
- **📚 Contributor** (Bronze) - Author 10 wikis
- **✍️ Prolific Author** (Silver) - Author 50 wikis
- **🏆 Wiki Master** (Gold) - Author 100 wikis
- **⭐ Highly Engaged** (Silver) - Reach 10,000 total views
- **👑 Top Contributor** (Gold) - Rank in top 10

### 🔄 Auto-Update
- Real-time data updates every 30 seconds
- Timestamp display showing last update
- Simulated live metrics changes

### 🔗 LinkedIn Integration
- **Share to LinkedIn**: One-click sharing of achievements and badges
- **Beautiful Preview**: See how your post will look before sharing
- **Auto-formatted Post**: Professionally formatted achievement summary
- **Clipboard Support**: Post text automatically copied for easy pasting
- **Demo Implementation**: Shows how real LinkedIn OAuth integration would work

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.x or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd hck-test-del
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

## 🏗️ Project Structure

```
hck-test-del/
├── src/
│   ├── components/
│   │   ├── Badge.jsx          # Badge component with tier styling
│   │   ├── Badge.css
│   │   ├── Leaderboard.jsx    # Main leaderboard table
│   │   ├── Leaderboard.css
│   │   ├── TrendingWikis.jsx  # Trending wikis section
│   │   ├── TrendingWikis.css
│   │   ├── UserProfile.jsx    # Detailed user profile view
│   │   ├── UserProfile.css
│   │   ├── ShareModal.jsx     # LinkedIn sharing modal
│   │   └── ShareModal.css
│   ├── data/
│   │   └── mockData.js        # Mock data and API simulation
│   ├── App.jsx                # Main application component
│   ├── App.css
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── FEATURES.md
└── LINKEDIN_INTEGRATION.md
```

## 🎨 Design Philosophy

The dashboard follows StackOverflow's design principles:
- **Clean and Professional**: Minimalist interface focusing on content
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Clear Hierarchy**: Visual distinction between different types of information
- **Interactive Elements**: Hover states and smooth transitions
- **Accessible Colors**: High contrast and readable typography

## 📊 Metrics Explained

### Engagement Score
Calculated as: `(Total Views × 0.6 + Agent Hits × 0.4) / 10`

This weighted formula emphasizes human views while also valuing AI agent usage, providing a comprehensive measure of content impact.

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **CSS3** - Styling with CSS variables and flexbox/grid

## 🌟 Future Enhancements

Potential features for future versions:
- Real backend integration with API
- User authentication and personalized dashboards
- Export metrics to CSV/PDF
- Advanced filtering and search
- Customizable time ranges for charts
- Notifications for new badges
- Social sharing of achievements

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and Vite

