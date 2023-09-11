import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import loadWebFonts from 'styles/Fonts';
import './App.scss';

import viteLogo from 'images/vite.svg';
import reactLogo from 'images/react.svg';

const { BASE_URL } = import.meta.env;

function App() {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Outlet />
      <nav>
        <NavLink to={BASE_URL}>Home</NavLink>
        {' | '}
        <NavLink to={BASE_URL + 'items'}>Items</NavLink>
      </nav>
    </>
  );
}

export default App;
