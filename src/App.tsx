import './App.css';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Root from './routes/Root';
import AboutPage from './components/AboutPage';
import QuotesPage from './components/QuotesPage';

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
