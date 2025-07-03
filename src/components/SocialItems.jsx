// SocialItems.jsx
import './Social-items.css';
import React from 'react';

export default function SocialItems() {
  const baseUrl = '/LiveDuneTestTask'; 

  return (
    <div className="social-auth">
      <div className="social-icons">
        <div className="social-item facebook">
          <img 
            src={`${baseUrl}/facebook-logo.svg`} 
            alt="Facebook" 
          />
          <span>Войти через Facebook</span>
        </div>
        <div className="social-item google">
          <img 
            src={`${baseUrl}/google-logo.png`} 
            alt="Google" 
          />
          <span>Войти через Google</span>
        </div>
      </div>
      <p className="or">Или</p>
    </div>
  );
}