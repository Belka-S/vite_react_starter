import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import loadWebFonts from 'styles/Fonts';
// import 'styles/GlobalStyles.scss';
import './App.scss';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
const VitePage = lazy(() => import('pages/VitePage'));
const ReactPage = lazy(() => import('pages/ReactPage'));

function App() {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vite" element={<VitePage />} />
        <Route path="react" element={<ReactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
