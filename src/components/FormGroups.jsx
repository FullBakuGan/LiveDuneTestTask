import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormConfigs } from '../data';
import './FormGroup.css';

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isLogin = location.pathname === '/';
  const isForgotPassword = location.pathname === '/forgotPassword';
  const isRegistration = location.pathname === '/registration';
  const isConfirmEmail = location.pathname === '/confirmEmail';
  const isNoEmail = location.pathname === '/noEmail';
  const isSendMessage = location.pathname === '/sendMessage';

  const config = isSendMessage
    ? FormConfigs.sendMessage
    : isNoEmail
    ? FormConfigs.isNoEmail
    : isConfirmEmail
    ? FormConfigs.confirmEmail
    : isForgotPassword
    ? FormConfigs.forgotPassword
    : isLogin
    ? FormConfigs.login
    : FormConfigs.registration;

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field of config.fields || []) {
      if (!formData[field]) {
        setError(`Введите ${field}`);
        return;
      }
    }

    if (formData.email) {
      const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailCheck.test(formData.email)) {
        setError('Введите корректный E-mail');
        return;
      }

      if ((isForgotPassword || isNoEmail) && config.correctEmail) {
        if (formData.email !== config.correctEmail) {
          setError('Этот email не зарегистрирован');
          return;
        }
      }
    }

    if (isLogin) {
      if (
        formData.email !== config.correctEmail ||
        formData.password !== config.correctPassword
      ) {
        setError('Неверный email или пароль');
        return;
      }
    }

    if (isRegistration && formData.confirmPassword !== undefined) {
      if (formData.password !== formData.confirmPassword) {
        setError('Пароли не совпадают');
        return;
      }
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(config.successMessage);

      if (isForgotPassword) {
        navigate('/sendMessage');
      } else if (isRegistration) {
          navigate('/confirmEmail');
        }
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form
      className={`form-items ${isForgotPassword ? 'centered-form' : ''} ${isConfirmEmail ? 'form-confirm' : ''}`}
      onSubmit={handleSubmit}
    >
      
      {!isConfirmEmail &&
        config.fields?.map((field) => (
          <div className="form-content" key={field}>
            <input
              type={field.includes('password') ? 'password' : 'text'}
              placeholder={`Введите ${field}...`}
              value={formData[field] || ''}
              onChange={handleChange(field)}
              required
            />
          </div>
        ))}

      {isRegistration && (
        <p className="promokod mobile-only">У меня есть промокод</p>
      )}

      {error && <div className="error-message">{error}</div>}

      <button type="submit" className="enter" onClick={() => navigate('/')} disabled={loading}>
        {isForgotPassword && loading ? (
          <span className="button-loader">
            <div className="loader"></div>
            Отправка...
          </span>
        ) : (
          config.buttonText
        )}
      </button>


      {isRegistration && (
        <p className="terms">
          Создавая аккаунт, я согласен с <a href="/terms">условиями оферты</a>
        </p>
      )}

      {isLogin && (
        <a href="/forgotPassword" className="forgot-password">
          Забыли пароль?
        </a>
      )}

      {(isForgotPassword || isNoEmail) && (
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Отменить
        </button>
      )}

      {isConfirmEmail && (
        <a href="/noEmail" className="forgot-password">
          Мне не пришло письмо
        </a>
      )}
    </form>
  );
}
