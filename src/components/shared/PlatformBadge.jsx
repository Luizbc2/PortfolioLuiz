export const PlatformBadge = ({ platform }) => (
  <span className="platform-badge" style={{ '--platform-accent': platform.accent }}>
    {platform.name}
  </span>
);
