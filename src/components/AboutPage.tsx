import React from 'react';
import { Link } from 'react-router-dom';
import { RouterLink } from './RouterLink';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center container mx-auto px-4 py-8 text-gray-800 dark:text-white w-full lg:w-1/2">
        <h1 className="text-7xl font-bold mb-4">About this app ✨</h1>
        <p className="text-lg mb-4">
          Price Pulse SPA, is a single-page application designed to display
          cryptocurrency quotes in real-time.
        </p>
        <p className="text-lg mb-4">
          This project was developed as a test assignment for a web developer
          position. It aims to demonstrate proficiency in React, TypeScript, and
          integrating external APIs.
        </p>
        <p className="text-lg mb-4">
          You can find the source code for this app on{' '}
          <a
            href="https://github.com/kastamas/price-pulse-spa"
            className="text-lg text-blue-500 dark:text-blue-300 hover:underline"
          >
            GitHub
          </a>
          .
        </p>

        <RouterLink
          to="/quotes"
          className="text-lg text-blue-500 dark:text-blue-300 hover:underline"
        >
          Go to Quotes Page
        </RouterLink>
      </div>
    </div>
  );
};

export default AboutPage;
