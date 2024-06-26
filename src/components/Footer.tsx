const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-5">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>
          &copy; 2024 Mikhail Sidorov |{' '}
          <a
            href="https://www.linkedin.com/in/mikxsid/"
            className="text-blue-500 dark:text-blue-300"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/kastamas/price-pulse-spa"
            className="text-blue-500 dark:text-blue-300"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
