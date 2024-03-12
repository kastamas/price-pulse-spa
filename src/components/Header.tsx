import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/about">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            PricePulse
          </div>
        </Link>

        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              to="/about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/quotes"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Quotes
            </Link>
          </li>
        </ul>

        <div />
      </nav>
    </header>
  );
};

export default Header;
