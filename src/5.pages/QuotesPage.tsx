import React from 'react';
import QuoteTable from '../components/QuoteTable';
import { RouterLink } from '../components/RouterLink';

const QuotesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center container mx-auto px-4 py-8 text-gray-800 dark:text-white w-full overflow-auto">
        <h2 className="text-3xl font-bold mb-8">
          Quotes from{' '}
          <a
            href="https://coincap.io/"
            className="text-blue-500 dark:text-blue-300"
          >
            CoinCap.io
          </a>
        </h2>
        <QuoteTable />
        <RouterLink to="/about">Go to about</RouterLink>
      </div>
    </div>
  );
};

export default QuotesPage;
