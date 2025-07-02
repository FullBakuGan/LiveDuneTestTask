import { useLocation } from 'react-router-dom';
import './WelkomMessage.css';

export default function WelkomMessage({ title, message }) {
  const location = useLocation();
  const isForgotPassword = location.pathname === '/forgotPassword';
  const isConfirmEmail = location.pathname === '/confirmEmail';

  return (
    <div className="welkom-message">
      <div className={`welkom-text
        ${isForgotPassword ? 'text-offset' : ''}
        ${isConfirmEmail ? 'confirm-offset' : ''}
      `}>
        <h1 className="welkom-title">{title}</h1>
        <p className={`welkom-subtitle ${isConfirmEmail ? 'no-bottom-margin' : ''}`}>
          {message}
        </p>
      </div>
    </div>
  );
}
