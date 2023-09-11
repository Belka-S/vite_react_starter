import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'components/App.jsx';
import Home from 'pages/Home';
import Items from 'pages/Items';
// import 'styles/GlobalStyles.scss';

const { BASE_URL } = import.meta.env;

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    children: [
      { path: BASE_URL, element: <Home /> },
      { path: BASE_URL + 'items', element: <Items /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
