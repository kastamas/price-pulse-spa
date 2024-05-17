import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './5.pages/ErrorPage';
import Root from './6.app/Root';
import AboutPage from './5.pages/AboutPage';
import QuotesPage from './5.pages/QuotesPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: '/',
          element: <AboutPage />,
        },
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
  ],
  {
    basename: '/price-pulse-spa/',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
