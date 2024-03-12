import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Root from './routes/Root';
import AboutPage from './components/AboutPage';
import QuotesPage from './components/QuotesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'quotes',
        element: <QuotesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
