import { useLocation, Link } from 'react-router-dom';
import { HeaderItems } from '../data';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const path = location.pathname.replace('/LiveDuneTestTask', '') || '/';

  const current = HeaderItems.find(item => item.path === path);
  if (!current) return null;

  const isResetPassword = path === '/forgotPassword';
  const isConfirmEmail = path === '/confirmEmail';
  const isNoEmail = path === '/noEmail';

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <h5>{current.leftItem}</h5>
        </div>

        {!isResetPassword && (
          <div className="header-right">
            {!isConfirmEmail && !isNoEmail && (
              <>
                {current.register && <p className="mobile-hidden">{current.register}</p>}
                {current.enter && (
                  <Link to={
                    path === '/' ? 'registration' :
                    path === '/registration' ? '/' :
                    '/'
                  }>
                    <button className="registration">{current.enter}</button>
                  </Link>
                )}
              </>
            )}
            {(isConfirmEmail || isNoEmail) && (
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