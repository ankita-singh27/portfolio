import React from "react";

const SocialIcon = ({ icon, color, link, tooltip }) => {
  return (
    <div
      className="social-icon"
      style={{ backgroundColor: color }}
      onClick={() => {
        link && window.open(link, "_blank");
      }}
    >
      {icon}
      <div className="tooltips">{tooltip}</div>
    </div>
  );
};

export default SocialIcon;
