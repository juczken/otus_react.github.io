import React from 'react';
import cn from 'clsx';
import style from './App.css';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={cn(style.App)}>
          <Layout></Layout>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
