import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormConfigs } from '../data';
import './FormGroup.css';

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === '/';
  const isForgotPassword = location.pathname === '/forgotPassword';
  const isRegistration = location.pathname === '/registration';
  const isConfirmEmail = location.pathname === '/confirmEmail';

 const config = isConfirmEmail
  ? FormConfigs.confirmEmail
  : isForgotPassword
  ? FormConfigs.forgotPassword
  : isLogin
  ? FormConfigs.login
  : FormConfigs.registration;


  

  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
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
      const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailCheck.test(formData.email)) {
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
    }

    if (isRegistration && formData.confirmPassword !== undefined) {
      if (formData.password !== formData.confirmPassword) {
        setError('Пароли не совпадают');
        return;
      }
    }

    alert(config.successMessage);
    setError('');

    if (isRegistration || isForgotPassword) {
      navigate('/confirmEmail');
    }
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
      config.fields.map((field) => (
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

      <button type="submit" className="enter">
        {config.buttonText}
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

      {isForgotPassword && (
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Отменить
        </button>
      )}

      {isConfirmEmail &&(
        <button type="button" className="forgot-password" onClick={handleCancel}>
          Мне не пришло письмо
        </button>
      )}
    </form>
  );
}
