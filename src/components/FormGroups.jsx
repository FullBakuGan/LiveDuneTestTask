import './FormGroup.css'
import React, { useState } from 'react';

export default function FormGroups() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const CORRECT_EMAIL = 'example@example.com';
  const CORRECT_PASSWORD = 'password2021';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Введите email");
      return;
    }

    if (!password) {
      setError("Введите пароль");
      return;
    }

    if (email !== CORRECT_EMAIL || password !== CORRECT_PASSWORD) {
      setError('Неверный email или пароль');
      return;
    }

    alert('Авторизация успешна!');
    setError('');
  };

  return (
    <form className="form-items" onSubmit={handleSubmit}>
      <div className="form-content">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите почту..."
          required
        />
      </div>
      <div className="form-content">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль..."
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="enter">Войти в аккаунт</button>
      <a href="#" className="forgot-password">Забыли пароль?</a>
    </form>
  );
}