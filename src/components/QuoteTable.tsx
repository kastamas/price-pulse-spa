import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    fetchQuotes(); // Выполняем первый запрос при монтировании
    const intervalId = setInterval(fetchQuotes, 5000); // Обновляем данные каждые 5 секунд

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>Change (24Hr)</th>
          <th>Rank</th>
          <th>Market Cap (USD)</th>
          <th>Supply</th>
          <th>Volume (24Hr)</th>
          <th>VWAP (24Hr)</th>
          <th>Explorer</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.name}</td>
            <td>{quote.symbol}</td>
            <td>{quote.priceUsd}</td>
            <td>{quote.changePercent24Hr}</td>
            <td>{quote.rank}</td>
            <td>{quote.marketCapUsd}</td>
            <td>{quote.supply}</td>
            <td>{quote.volumeUsd24Hr}</td>
            <td>{quote.vwap24Hr}</td>
            <td>
              <a href={quote.explorer}>Explorer</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;
