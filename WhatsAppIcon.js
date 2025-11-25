import React, { useState, useEffect } from 'react';
import '../styles/WhatsAppIcon.css';

const WhatsAppIcon = () => {
    const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const phoneNumber = "923497001241";
  const message = "Hi Zulqarnain, I came across your portfolio and would like to connect with you!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show icon after page load with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-hide tooltip after 4 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setShowTooltip(false);
    window.open(whatsappUrl, '_blank');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`whatsapp-bottom-right ${isVisible ? 'visible' : ''}`}>
      {/* Floating Chat Bubbles */}
      <div className="chat-bubbles">
        <div className="bubble bubble-1">💬</div>
        <div className="bubble bubble-2">👋</div>
        <div className="bubble bubble-3">🚀</div>
      </div>

      {/* Main WhatsApp Icon */}
      <div 
        className="whatsapp-main-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Animated Rings */}
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
        <div className="pulse-ring ring-3"></div>
        
        {/* Glow Effect */}
        <div className="icon-glow"></div>
        
        {/* Main Icon */}
        <div className={`whatsapp-main-icon ${isHovered ? 'hovered' : ''} ${clickCount > 0 ? 'clicked' : ''}`}>
          <i className="fab fa-whatsapp"></i>
          <div className="icon-shine"></div>
        </div>

        {/* Notification Badge */}
        <div className="message-badge">
          <span>💬</span>
          <div className="badge-pulse"></div>
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div className="whatsapp-tooltip-bottom">
            <div className="tooltip-content-bottom">
              <div className="tooltip-header">
                <i className="fab fa-whatsapp me-2"></i>
                <strong>Let's Chat!</strong>
              </div>
              <div className="tooltip-body">
                <small>Available for projects & opportunities</small>
              </div>
              <div className="tooltip-footer">
                <span>Click to start conversation</span>
              </div>
            </div>
            <div className="tooltip-arrow-bottom"></div>
          </div>
        )}
      </div>

      {/* Background Effects */}
      <div className="background-effects">
        <div className="effect effect-1"></div>
        <div className="effect effect-2"></div>
        <div className="effect effect-3"></div>
      </div>
    </div>
  );
};



export default WhatsAppIcon;