import React from 'react'
import './RightPanel.css';

const RightPanel = () => {
  return (
     <div className="right-sidebar">
        <div className="right-sidebar-content">
          <div className="user-greeting">
            <div className="user-avatar">
              <div className="avatar-icon"></div>
            </div>
            <div className="user-info">
              <div className="user-name">Hi, user</div>
              <div className="user-subtitle">let's get stated</div>
            </div>
          </div>
          <button className="join-btn">Join now</button>
          <div className="login-section">
            <button className="login-btn">Log in</button>
          </div>
          <div className="promo-card orange">
            <div>Get US $10 off</div>
            <div>with a new</div>
            <div>supplier</div>
          </div>
          <div className="promo-card teal">
            <div>Send quotes with</div>
            <div>supplier</div>
            <div>preferences</div>
          </div>
        </div>
      </div>
  )
}

export default RightPanel
