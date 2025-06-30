import './Social-items.css'

export default function SocialItems() {
  return (
    <div className="social-auth">
      <div className="social-icons">
        <div className="social-item">
          <img src="/facebook-logo.svg" alt="Facebook" />
          <span>Войти через Facebook</span>
        </div>
        <div className="social-item">
          <img src="/google-logo.png" alt="Google" />
          <span>Войти через Google</span>
        </div>
      </div>
      <p className="or">Или</p>
    </div>
  );
}

