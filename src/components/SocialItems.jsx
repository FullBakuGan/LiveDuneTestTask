import './Social-items.css';
import React from 'react';
import { SocialItemsImages } from '../data';

export default function SocialItems() {
  return (
    <div className="social-auth">
      <div className="social-icons">
        <div className="social-item facebook">
          <img src={SocialItemsImages.facebook} alt="Facebook" />
          <span>Войти через Facebook</span>
        </div>
        <div className="social-item google">
          <img src={SocialItemsImages.google} alt="Google" />
          <span>Войти через Google</span>
        </div>
      </div>
      <p className="or">Или</p>
    </div>
  );
}