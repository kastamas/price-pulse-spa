import React, { useEffect } from 'react';
import QuoteTable from './QuoteTable';
import { Link } from 'react-router-dom';

const QuotesPage: React.FC = () => {
  // Здесь можно определить состояние для хранения данных котировок

  useEffect(() => {
    // Функция для обновления данных котировок
    const updateQuotes = () => {
      // Здесь можно вызвать функцию для получения данных котировок с сервера
      // и обновить состояние с полученными данными
      console.log('Updating quotes...');
    };

    // Вызываем функцию обновления котировок каждые 5 секунд
    const intervalId = setInterval(updateQuotes, 5000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Quotes Page</h2>
      <Link to="/">Go to about</Link>
      <QuoteTable />
    </div>
  );
};

export default QuotesPage;
