import { useLocation } from 'react-router-dom';
import './WelkomMessage.css';

export default function WelkomMessage({ title, message }) {
  const location = useLocation();
  const isForgotPassword = location.pathname === '/forgotPassword';

  return (
    <div className="welkom-message">
      <div className={`welkom-text ${isForgotPassword ? 'text-offset' : ''}`}>
        <h1 className="welkom-title">{title}</h1>
        <p className="welkom-subtitle">{message}</p>
      </div>
    </div>
  );
}
