import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';

const billion = 1000000000;
const million = 1000000;

const prettifyNumber = (number) => {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    return parseFloat(number).toLocaleString('en-US');
  }

  return number;
};

const QuoteTable: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);

  const fetchQuotes = async () => {
    try {
      const bitcoinResponse = await axios.get(
        'https://api.coincap.io/v2/assets/bitcoin'
      );
      const bitcoinData = bitcoinResponse.data.data;

      const ethereumResponse = await axios.get(
        'https://api.coincap.io/v2/assets/ethereum'
      );
      const ethereumData = ethereumResponse.data.data;

      const quotesData = [bitcoinData, ethereumData];

      setQuotes(quotesData);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200 mb-4">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <TableRow>
          <TableHeader>Rank</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Price (USD)</TableHeader>
          <TableHeader>Change (24Hr)</TableHeader>
          <TableHeader>Market Cap (USD)</TableHeader>
          <TableHeader>Supply</TableHeader>
          <TableHeader>Volume (24Hr)</TableHeader>
          <TableHeader>VWAP (24Hr)</TableHeader>
          <TableHeader>Explorer</TableHeader>
        </TableRow>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
        {quotes.map((quote) => (
          <TableRow key={quote.id}>
            <TableCell>{quote.rank}</TableCell>
            <TableCell>
              {quote.name} ({quote.symbol})
            </TableCell>

            <TableCell>
              ${prettifyNumber(parseFloat(quote.priceUsd).toFixed(2))}
            </TableCell>

            <TableCell
              className={`${
                parseFloat(quote.changePercent24Hr) >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {parseFloat(quote.changePercent24Hr).toFixed(2)}%
            </TableCell>

            <TableCell>
              $
              {prettifyNumber(
                (parseFloat(quote.marketCapUsd) / billion).toFixed(2)
              )}
              b
            </TableCell>

            <TableCell>
              {prettifyNumber((parseFloat(quote.supply) / million).toFixed(2))}m
            </TableCell>

            <TableCell>
              $
              {prettifyNumber(
                (parseFloat(quote.volumeUsd24Hr) / billion).toFixed(2)
              )}
              b
            </TableCell>

            <TableCell>
              ${prettifyNumber(parseFloat(quote.vwap24Hr).toFixed(2))}
            </TableCell>

            <TableCell>
              <a
                href={quote.explorer}
                className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              >
                Explorer
              </a>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;
