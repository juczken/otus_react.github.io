import React from 'react';
import cn from 'clsx';
import style from './App.css';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import './localization';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import { menuItems } from 'src/shared/ui/Layout/menuItems';
import { Route, Routes } from 'react-router-dom';
import Header from 'src/shared/ui/Header/Header';

function App() {
  const generateRoutes = (items: typeof menuItems) => {
    return items.map((item) => {
      console.log(item);
      if (item.dropdown) {
        return (
          <React.Fragment key={item.path + item.label}>
            <Route path={item.path} element={item.element} />
            {generateRoutes(item.dropdown)}
          </React.Fragment>
        );
      }
      console.log(
        (<Route key={item.path + item.label} path={item.path} element={item.element} />).type,
        (<Route key={item.path + item.label} path={item.path} element={item.element} />).key
      );
      return <Route key={item.path + item.label} path={item.path} element={item.element} />;
    });
  };
  console.log('app');
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={cn(style.App)}>
          {/* <Header>{<button onClick={() => console.log('click')}>button</button>} </Header> */}
          <Routes>
            <Route
              path="/"
              element={<Header>{<button onClick={() => console.log('route click')}>button</button>} </Header>}
            />
            <Route path="/qw" element={<label>label</label>} />
          </Routes>
          {/* <Routes>
              <Route path="/" element={<Layout />}>
                {generateRoutes(menuItems)}
              </Route>
            </Routes> */}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
