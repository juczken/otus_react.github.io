
import React, { FC, ReactNode } from 'react';
import cn from 'clsx'
import Header from '../Header/Header';
import style from './Layout.module.css'

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={cn(style.Layout)}>
      <Header />
      {children}
    </div>
  );
};

export default Layout