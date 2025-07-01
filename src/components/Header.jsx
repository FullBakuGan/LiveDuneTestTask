import './Header.css';
import { useLocation } from 'react-router-dom';
import { HeaderItems } from '../data';
import { Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isLogin = location.pathname === '/'; 

  const current = isLogin ? HeaderItems[1] : HeaderItems[0];
  const isResetPassword = location.pathname === '/forgotPassword';

  return (
  <header>
    <div className="header-container">
      <div className="header-left">
        <h5>{current.leftItem}</h5>
      </div>

      {!isResetPassword && (
        <div className="header-right">
          <p className="mobile-hidden">{current.register}</p>
          <Link to={current.path}>
            <button className="registration">{current.enter}</button>
          </Link>
        </div>
      )}
    </div>
  </header>
);

}
