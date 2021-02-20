import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;