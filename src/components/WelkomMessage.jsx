import { useLocation } from 'react-router-dom';
import './WelkomMessage.css';
import React from 'react';

export default function WelkomMessage({ title, message, image }) {
  const location = useLocation();
  const path = location.pathname.replace('/LiveDuneTestTask', '') || '/';
  
  const isEnterPage = path === '/';
  const isForgotPassword = path === '/forgotPassword';
  const isConfirmEmail = path === '/confirmEmail';
  const isNoEmail = path === '/noEmail';
  const isSendMessage = path === '/sendMessage';

  return (
    <div className="welkom-message">
      {(isForgotPassword || isSendMessage) && image && (
        <div className="welkom-image">
          <img src={image} alt="icon" />
        </div>
      )}
      <div
        className={`welkom-text 
          ${isForgotPassword ? 'text-offset' : ''} 
          ${isConfirmEmail || isNoEmail || isSendMessage ? 'confirm-offset' : ''}
          ${isEnterPage ? 'enter-offset' : ''}
        `}
      >
        <h1 className="welkom-title">{title}</h1>
        <p
          className={`welkom-subtitle ${
            isConfirmEmail ? 'no-bottom-margin' : ''
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}