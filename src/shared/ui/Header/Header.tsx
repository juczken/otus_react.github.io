import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
};

export default Header