import { useLocation, Link } from 'react-router-dom';
import { HeaderItems } from '../data';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const current = HeaderItems.find(item => item.path === pathname);
  if (!current) return null;

  const isResetPassword = pathname === '/forgotPassword';
  const isConfirmEmail = pathname === '/confirmEmail';

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <h5>{current.leftItem}</h5>
        </div>

        {!isResetPassword && (
          <div className="header-right">
            {!isConfirmEmail && (
              <>
                {current.register && <p className="mobile-hidden">{current.register}</p>}
                {current.enter && (
                <Link to={
                  pathname === '/' ? '/registration' :
                  pathname === '/registration' ? '/' :
                  '/'
                }>
    <button className="registration">{current.enter}</button>
  </Link>
)}

              </>
            )}
            {isConfirmEmail && (
              <Link to="/">
                <button className="confirmEmail">{current.enter}</button>
              </Link>
            )}
          </div>
        )}

      </div>
    </header>
  );
}
