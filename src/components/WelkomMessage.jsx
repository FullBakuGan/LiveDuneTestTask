import { useLocation } from 'react-router-dom';
import './WelkomMessage.css';

export default function WelkomMessage({ title, message, image }) {
  const location = useLocation();
  const isEnterPage = location.pathname === '/';
  const isForgotPassword = location.pathname === '/forgotPassword';
  const isConfirmEmail = location.pathname === '/confirmEmail';
  const isNoEmail = location.pathname === '/noEmail';
  const isSendMessage = location.pathname == '/sendMessage';
  return (
    <div className="welkom-message">
      {isForgotPassword || isSendMessage && image && (
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
