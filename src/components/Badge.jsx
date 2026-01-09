import React from 'react';
import './Badge.css';

const Badge = ({ badge, size = 'medium', showTooltip = true }) => {
  const sizeClass = `badge-${size}`;
  
  return (
    <div className={`badge ${sizeClass} badge-${badge.tier}`} title={showTooltip ? badge.description : ''}>
      <span className="badge-icon">{badge.icon}</span>
      {size !== 'small' && <span className="badge-name">{badge.name}</span>}
    </div>
  );
};

export const BadgeList = ({ badges, size = 'medium', maxDisplay = null }) => {
  const displayBadges = maxDisplay ? badges.slice(0, maxDisplay) : badges;
  const remaining = maxDisplay && badges.length > maxDisplay ? badges.length - maxDisplay : 0;

  return (
    <div className="badge-list">
      {displayBadges.map((badge) => (
        <Badge key={badge.id} badge={badge} size={size} />
      ))}
      {remaining > 0 && (
        <span className="badge-remaining">+{remaining} more</span>
      )}
    </div>
  );
};

export default Badge;

