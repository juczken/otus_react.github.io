import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.item}>
        <Logo />
      </div>
      <div className={style.right_wrapper}>
        <div className={style.item}>
          <ThemeSwitcher />
        </div>
        <div className={style.item}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
