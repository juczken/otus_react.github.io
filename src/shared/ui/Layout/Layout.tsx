import React, { FC, ReactNode } from 'react';
import cn from 'clsx';
import Header from '../Header/Header';
import style from './Layout.module.css';
import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={cn(style.Layout)}>
      <Header>
        <div className={style.item}>
          <Logo />
        </div>
        <div>
          <NavigationBar menuItems={[]} />
        </div>
        <div className={style.right_wrapper}>
          <div className={style.item}>
            <ThemeSwitcher />
          </div>
          <div className={style.item}>
            <LanguageSwitcher />
          </div>
        </div>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
