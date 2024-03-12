import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the Price Pulse SPA!</p>
      <Link to="/quotes">Go to Quotes</Link>
    </div>
  );
};

export default AboutPage;
