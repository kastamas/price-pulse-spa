import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import QuotesPage from './components/QuotesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
  },
  {
    path: '/quotes',
    element: <QuotesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
