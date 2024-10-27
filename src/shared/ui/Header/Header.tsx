import React from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Logo />
      </div>
      {/* <div className={style.themeSwitcher} onClick={() => toggleTheme()}>{'\u{263d}\u{263c}'}</div> */}
      <div style={{ display: 'flex'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <button className={style.themeSwitcher} onClick={() => toggleTheme()}>{theme === 'light' ? '\u{263d}' : '\u{263c}'}</button> */}
          <ThemeSwitcher />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <button className={style.themeSwitcher} onClick={() => toggleTheme()}>{theme === 'light' ? '\u{263d}' : '\u{263c}'}</button> */}
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header