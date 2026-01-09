import React from 'react';
import './ShareModal.css';

const ShareModal = ({ user, onClose, onConfirm }) => {
  const formatNumber = (num) => num.toLocaleString();
  
  const badgeNames = user.badges.map(b => b.name).join(', ');
  const postText = `🎉 Excited to share my latest achievements on the Wiki Metrics Dashboard!\n\n` +
    `📊 My Stats:\n` +
    `📚 ${formatNumber(user.wikisAuthored)} Wikis Authored\n` +
    `👁️ ${formatNumber(user.totalViews)} Total Views\n` +
    `🤖 ${formatNumber(user.agentHits)} Agent Hits\n` +
    `⭐ ${formatNumber(user.engagement)} Engagement Score\n\n` +
    `🎖️ Badges Earned: ${badgeNames}\n\n` +
    `#WikiContributor #KnowledgeSharing #TechCommunity`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            <span className="linkedin-logo">in</span>
            Share to LinkedIn
          </h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <div className="preview-section">
            <h3>Post Preview</h3>
            <div className="post-preview">
              <div className="preview-header">
                <img src={user.avatar} alt={user.name} className="preview-avatar" />
                <div>
                  <div className="preview-name">{user.name}</div>
                  <div className="preview-meta">Just now • 🌐</div>
                </div>
              </div>
              <div className="preview-text">{postText}</div>
              <div className="preview-stats">
                <span>👍 Like</span>
                <span>💬 Comment</span>
                <span>🔄 Repost</span>
                <span>📤 Send</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <p className="info-text">
              <strong>Note:</strong> This is a demo implementation. In a production environment:
            </p>
            <ul className="info-list">
              <li>You would authenticate with LinkedIn OAuth</li>
              <li>The post would be published directly via LinkedIn's API</li>
              <li>You could include badge images in the post</li>
            </ul>
            <p className="info-text">
              For now, we'll copy the text to your clipboard and open LinkedIn's share page.
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-share" onClick={onConfirm}>
            <span className="linkedin-icon">in</span>
            Share to LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

