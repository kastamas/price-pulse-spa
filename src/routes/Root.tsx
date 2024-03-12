import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Root() {
  return (
    <div className="flex flex-col justify-between bg-gray-100 dark:bg-gray-800 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
