import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;