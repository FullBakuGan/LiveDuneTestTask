import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { setEmail, setPassword } from '../slices/authSlice';
import { FormConfigs } from '../data';
import './FormGroup.css';

export default function Form() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [localFormData, setLocalFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const hashPath = location.hash.replace('#', '') || '/';
  const isLogin = hashPath === '/';
  const isForgotPassword = hashPath === '/forgotPassword';
  const isRegistration = hashPath === '/registration';
  const isConfirmEmail = hashPath === '/confirmEmail';
  const isNoEmail = hashPath === '/noEmail';
  const isSendMessage = hashPath === '/sendMessage';

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
    const value = e.target.value;
    setLocalFormData((prev) => ({ ...prev, [field]: value }));
    if (field === 'email') {
      dispatch(setEmail(value));
    }
    if (field === 'password') {
      dispatch(setPassword(value));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  for (const field of config.fields || []) {
    if (!localFormData[field]) {
      setError(`Введите ${field}`);
      setLoading(false);
      return;
    }
  }

  if (localFormData.email) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(localFormData.email)) {
      setError('Введите корректный E-mail');
      setLoading(false);
      return;
    }
    
    if ((isForgotPassword || isNoEmail) && config.correctEmail) {
      if (localFormData.email !== config.correctEmail) {
        setError('Этот email не зарегистрирован');
        setLoading(false);
        return;
      }
    }
  }

  if (isLogin) {
    if (localFormData.email !== config.correctEmail || 
        localFormData.password !== config.correctPassword) {
      setError('Неверный email или пароль');
      setLoading(false);
      return;
    }
  }

  if (isRegistration && localFormData.confirmPassword !== undefined) {
    if (localFormData.password !== localFormData.confirmPassword) {
      setError('Пароли не совпадают');
      setLoading(false);
      return;
    }
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert(config.successMessage);
    
  } catch (err) {
    setError('Произошла ошибка. Попробуйте позже.');
  } finally {
    setLoading(false);
  }
};

  const handleCancel = () => {
    navigate('/#');
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
              value={localFormData[field] || ''}
              onChange={handleChange(field)}
              required
            />
          </div>
        ))}

      {isRegistration && <p className="promokod mobile-only">У меня есть промокод</p>}
      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        className="enter"
        disabled={loading}
        onClick={isSendMessage || isLogin ? handleCancel : undefined}
      >
        {loading ? (
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
          Создавая аккаунт, я согласен с <a href="">условиями оферты</a>
        </p>
      )}

      {isLogin && (
        <Link to="#/forgotPassword" className="forgot-password">Забыли пароль?</Link>
      )}

      {(isForgotPassword || isNoEmail) && (
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Отменить
        </button>
      )}
      
      {isConfirmEmail && (
        <Link to="#/noEmail" className="forgot-password">Мне не пришло письмо</Link>
      )}
    </form>
  );
}