import React from 'react';
import { Link } from 'react-router-dom';
import { RouterLink } from './RouterLink';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center container mx-auto px-4 py-8 text-gray-800 dark:text-white w-full lg:w-1/2">
        <h1 className="text-7xl font-bold mb-8">About this app ✨</h1>
        <p className="text-lg mb-4 pr-4 pl-4">
          <span className="font-bold">PricePulse</span> — is a single-page
          application designed to display cryptocurrency quotes in real-time.
        </p>

        <p className="text-lg mb-4 pb-4">
          <RouterLink
            to="/quotes"
            className="text-lg text-blue-500 dark:text-blue-300 hover:underline"
          >
            Go to Quotes Page
          </RouterLink>{' '}
          — To see main features
        </p>
        <p className="text-lg mb-4 pr-4 pl-4">
          p.s. This project was developed as a test assignment for a web
          developer position. It aims to demonstrate proficiency in React,
          TypeScript, and integrating external APIs.
        </p>
        <p className="text-lg mb-4 pr-4 pl-4">
          You can find it's source code on{' '}
          <a
            href="https://github.com/kastamas/price-pulse-spa"
            className="text-lg text-blue-500 dark:text-blue-300 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
