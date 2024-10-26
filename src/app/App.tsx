import React from 'react';
import cn from 'clsx'
import style from './App.css';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import Layout from '../shared/ui/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <div className={cn(style.App)}>
        <Layout>
          
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
