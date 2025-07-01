import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormConfigs } from '../data';
import './FormGroup.css';

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/';
  const isForgotPassword = location.pathname === '/forgotPassword';

  const config = isForgotPassword
    ? FormConfigs.forgotPassword
    : isLogin
    ? FormConfigs.login
    : FormConfigs.registration;

  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field of config.fields) {
      if (!formData[field]) {
        setError(`Введите ${field}`);
        return;
      }
    }

    if (formData.email) {
      const emailChek = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailChek.test(formData.email)) {
        setError('Введите корректный E-mail');
        return;
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
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('Пароли не совпадают');
        return;
      }
    }

    alert(config.successMessage);
    setError('');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form
      className={`form-items ${isForgotPassword ? 'centered-form' : ''}`}
      onSubmit={handleSubmit}
    >
      {config.fields.map(field => (
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

      {!isLogin && (
        <p className="promokod mobile-only">У меня есть промокод</p>
      )}

      {error && <div className="error-message">{error}</div>}

      <button type="submit" className="enter">{config.buttonText}</button>

      {!isLogin && !isForgotPassword && (
        <p className="terms">
          Создавая аккаунт, я согласен с <a href="/terms">условиями оферты</a>
        </p>
      )}

      {isLogin && (
        <a href="/forgotPassword" className="forgot-password">Забыли пароль?</a>
      )}

      {isForgotPassword && (
        <button
          type="button"
          className="cancel-button"
          onClick={handleCancel}
        >
          Отменить
        </button>
      )}
    </form>
  );
}
