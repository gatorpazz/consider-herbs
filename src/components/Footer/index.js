import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <nav>
      <h2>This is the footer.</h2>
      <ul>
        <li><Link to="/">Go Back Home</Link></li>
      </ul>
    </nav>

  </footer>
);

export default Footer;