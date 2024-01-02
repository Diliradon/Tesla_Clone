import React from 'react';
import './Header.scss';
import LogoHeader from '../../images/logos/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={LogoHeader} alt="Logo" />
      </a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">Model S</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Model X</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Model 3</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Model Y</a>
          </li>
        </ul>
      </nav>
      <div className="right-menu">
        <a href="#" className="right-menu__shop">
          Shop
        </a>
        <a href="#" className="right-menu__shop">
          Tesla Account
        </a>
        <a href="#" className="right-menu__icon"></a>
      </div>
    </header>
  )
}