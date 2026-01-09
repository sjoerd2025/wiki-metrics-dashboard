# 🎯 Feature Guide - Wiki Metrics Dashboard

## Overview
The Wiki Metrics Dashboard provides a comprehensive view of user contributions and engagement with wiki content. This guide explains how to use each feature.

## 🔥 Trending Wikis Features

### Overview
The Trending Wikis section showcases the most popular and recently updated wiki content, helping users discover high-value resources.

### Trending Algorithm
Wikis are ranked using a smart algorithm that considers:
- **Recent Activity**: Recently updated wikis get a boost
- **View Count**: Total number of views (60% weight)
- **Agent Hits**: AI agent usage (40% weight)
- **Recency Boost**: Content updated in the last 30 days scores higher

### Visual Indicators
Each wiki displays a trending badge:
- **🔥 Hot** (Rank #1): The hottest trending wiki
- **⚡ Rising** (Rank #2): Rapidly gaining traction
- **✨ Popular** (Rank #3): Highly popular content
- **📈 Trending** (Rank #4-10): Currently trending

### Card Information
Each trending wiki card shows:
- **Rank Number**: Position in trending list
- **Wiki Title**: Name of the wiki article
- **Author Info**:
  - Author avatar (clickable)
  - Author name
  - Username
- **Metrics**:
  - 👁️ View count
  - 🤖 Agent hits
  - 📊 Trending score
- **Update Time**: How recently the wiki was updated

### Interactions
- **Click Author**: Opens the author's profile
- **Hover Card**: Elevates with shadow effect
- **Auto-Update**: Refreshes every 30 seconds with new data

## 🏆 Leaderboard Features

### Sorting Capabilities
Click on any column header to sort the leaderboard:
- **Wikis Authored**: See who has created the most content
- **Agent Hits**: Identify wikis most used by AI agents
- **Total Views**: Find the most viewed content creators
- **Engagement Score**: Overall impact ranking (default sort)

### Visual Indicators
- **🥇🥈🥉 Medals**: Top 3 users get special recognition
- **Rank Numbers**: Clear position for all users
- **Active Sort Indicator**: ▼ shows current sort column
- **Hover Effects**: Rows highlight on hover for better readability

### User Information Display
Each row shows:
- User avatar (unique to each user)
- Full name and username
- All key metrics at a glance
- Up to 3 badges (with "+X more" indicator if applicable)

## 👤 User Profile Features

### Accessing Profiles
- Click on any user row in the leaderboard
- Profile smoothly scrolls into view
- Close button (✕) returns to leaderboard view

### Profile Header
- Large avatar with gradient background
- User name and username
- Member since date
- Complete badge collection display

### Statistics Cards
Four key metric cards:
1. **📚 Wikis Authored**: Total content created
2. **👁️ Total Views**: Cumulative view count
3. **🤖 Agent Hits**: AI agent usage count
4. **⭐ Engagement Score**: Highlighted overall impact (orange gradient)

### Interactive Charts

#### Engagement Over Time (Line Chart)
- **Blue Line**: Total views per month
- **Orange Line**: Agent hits per month
- Shows 12-month trend
- Hover for exact values

#### Monthly Wiki Creation (Bar Chart)
- **Green Bars**: Number of wikis created each month
- Visualizes content creation patterns
- Helps identify productive periods

### Recent Wiki Contributions
Lists the 5 most recent wikis with:
- Wiki title (clickable blue text)
- Creation date
- View count with 👁️ icon
- Agent hits with 🤖 icon
- Last updated timestamp

### LinkedIn Sharing
Share your achievements directly to LinkedIn:
- **Share Button**: Located in the profile header next to badges
- **Preview Modal**: See exactly how your post will look
- **Auto-formatted**: Professional achievement summary with stats and badges
- **One-Click**: Text copied to clipboard and LinkedIn opened automatically

## 🎖️ Badge System

### Badge Tiers
Badges come in three tiers with distinct styling:

**🥉 Bronze Badges** (Beige background)
- First Wiki
- Contributor (10 wikis)

**🥈 Silver Badges** (Gray background)
- Prolific Author (50 wikis)
- Highly Engaged (10,000 views)

**🥇 Gold Badges** (Yellow background)
- Wiki Master (100 wikis)
- Top Contributor (Top 10 ranking)

### Badge Display
- **In Leaderboard**: Small badges, max 3 shown
- **In Profile**: Large badges with full details
- **Hover**: Tooltip shows badge description
- **Automatic Awards**: Badges earned automatically when milestones reached

## 🔄 Auto-Update System

### Real-Time Updates
- Metrics update every 30 seconds
- Simulates live activity tracking
- No page refresh needed

### Update Indicator
- Header shows "Last updated: [time]"
- Timestamp updates with each refresh
- Ensures you're viewing current data

## 📱 Responsive Design

### Desktop (1024px+)
- Full table with all columns visible
- Side-by-side charts
- Large badges and avatars

### Tablet (768px - 1024px)
- Condensed table spacing
- Stacked charts
- Medium-sized elements

### Mobile (<768px)
- Badges column hidden in leaderboard
- Single column layout
- Smaller text and icons
- Touch-friendly tap targets

## 💡 Tips for Best Experience

1. **Explore Sorting**: Try different sort options to discover insights
2. **Check Profiles**: Click users to see detailed engagement patterns
3. **Watch Trends**: Use charts to identify growth patterns
4. **Badge Hunting**: Track your progress toward next badge milestone
5. **Regular Visits**: Check back to see updated metrics

## 🎨 Design Elements

### Color Scheme
- **Primary Orange** (#f48024): Engagement highlights
- **Secondary Blue** (#0a95ff): Links and interactive elements
- **Success Green** (#5eba7d): Positive metrics
- **Purple Gradient**: Headers and hero sections

### Typography
- System fonts for optimal performance
- Clear hierarchy with size and weight
- High contrast for readability

### Interactions
- Smooth hover transitions
- Clickable rows with visual feedback
- Animated profile appearance
- Responsive button states

## 🔍 Understanding Metrics

### Wikis Authored
Total number of wiki articles created by the user. Higher numbers indicate prolific content creators.

### Agent Hits
Number of times AI agents have accessed or referenced the user's wikis. Indicates content usefulness for automated systems.

### Total Views
Cumulative number of times the user's wikis have been viewed by all users. Measures content reach.

### Engagement Score
Weighted calculation: `(Views × 60% + Agent Hits × 40%) / 10`
- Balances human and AI engagement
- Provides single metric for overall impact
- Used for default leaderboard ranking

## 🔗 LinkedIn Integration Details

### How It Works

The LinkedIn sharing feature provides a seamless way to showcase your achievements on your professional network.

#### Step-by-Step Process

1. **Open User Profile**: Click on any user in the leaderboard
2. **Click Share Button**: Find the blue "Share to LinkedIn" button next to the badges
3. **Preview Your Post**: A modal opens showing:
   - How your post will appear on LinkedIn
   - Your profile picture and name
   - Formatted achievement text with all your stats
   - All earned badges listed
4. **Confirm Sharing**: Click "Share to LinkedIn" in the modal
5. **Auto-Copy & Open**:
   - Achievement text is copied to your clipboard
   - LinkedIn opens in a new tab
   - Paste the text into your LinkedIn post

### Post Format

The generated LinkedIn post includes:

```
🎉 Excited to share my latest achievements on the Wiki Metrics Dashboard!

📊 My Stats:
📚 [X] Wikis Authored
👁️ [X] Total Views
🤖 [X] Agent Hits
⭐ [X] Engagement Score

🎖️ Badges Earned: [Badge Names]

#WikiContributor #KnowledgeSharing #TechCommunity
```

### Technical Implementation

**Current (Demo) Implementation:**
- Uses browser's Clipboard API to copy text
- Opens LinkedIn's share page in new tab
- User manually pastes the pre-formatted text

**Production Implementation Would Include:**
- LinkedIn OAuth 2.0 authentication
- Direct posting via LinkedIn Share API
- Automatic image generation of badges
- Rich media preview cards
- Analytics tracking for shared posts

### Privacy & Security

- No data is sent to external servers in this demo
- Text is only copied to your local clipboard
- You have full control over what gets posted
- You can edit the text before publishing on LinkedIn

## 🚀 Quick Actions

| Action | How To |
|--------|--------|
| View trending wikis | Scroll to top of homepage |
| Click trending wiki author | Click author avatar/name in trending card |
| Sort leaderboard | Click column header |
| View user profile | Click any user row |
| Close profile | Click ✕ button |
| See badge details | Hover over badge |
| Check last update | Look at header timestamp |
| Share to LinkedIn | Click "Share to LinkedIn" button in profile |
| Preview LinkedIn post | Opens automatically when sharing |

---

For technical details, see [README.md](README.md)

