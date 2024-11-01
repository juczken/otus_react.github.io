import React, { FC } from 'react';
import ThemeSwitcher from '../../shared/ui/ThemeSwitcher/ThemeSwitcher';

import ThemeProvider from '../../shared/providers/ThemeProvider/ThemeProvider';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import '../../app/App.css';

const ThemeSwitcherViewer: FC = () => {
  return (
    <>
      <ThemeProvider>
        <div style={{ height: '30px', width: '300px' }}>
          <ThemeSwitcher />
        </div>
        <hr />
        <ProductItem
          name="Lorem ipsum"
          price={19.95}
          desc="Lorem ipsum dolor sit amet consectetur adipiscing elit nostra."
          photo="https://via.placeholder.com/500.png?text=Lorem+ipsum"
        />
      </ThemeProvider>
    </>
  );
};

export default ThemeSwitcherViewer;
