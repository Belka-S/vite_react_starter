import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {' | '}
        <NavLink to="vite">Vite</NavLink>
        {' | '}
        <NavLink to="react">React</NavLink>
      </nav>

      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
