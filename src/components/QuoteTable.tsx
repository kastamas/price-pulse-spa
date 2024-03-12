import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import { Modal } from './Modal';
import { BILLION, MILLION, prettifyNumber } from '../helpers';

const QuoteTable: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [modalInfo, setModalInfo] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<any>(null);

  const openModal = (quote: any) => {
    setModalInfo(quote);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalInfo(null);
  };

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

      const tetherResponse = await axios.get(
        'https://api.coincap.io/v2/assets/tether'
      );

      const tetherData = tetherResponse.data.data;

      const quotesData = [bitcoinData, ethereumData, tetherData];

      setQuotes(quotesData);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setError('Error fetching quotes'); // Set error state
    }
  };

  useEffect(() => {
    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const errorIndicator = error && (
    <div className="bg-red-500 text-white p-2">Error: {error}</div>
  );

  return (
    <>
      {errorIndicator}

      <table className="min-w-full divide-y divide-gray-200 mb-8">
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
            <TableRow key={quote.id} onClick={() => openModal(quote)}>
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
                  (parseFloat(quote.marketCapUsd) / BILLION).toFixed(2)
                )}
                b
              </TableCell>

              <TableCell>
                {prettifyNumber(
                  (parseFloat(quote.supply) / MILLION).toFixed(2)
                )}
                m
              </TableCell>

              <TableCell>
                $
                {prettifyNumber(
                  (parseFloat(quote.volumeUsd24Hr) / BILLION).toFixed(2)
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

      <Modal isOpen={isOpen} closeModal={closeModal} modalInfo={modalInfo} />
    </>
  );
};

export default QuoteTable;
