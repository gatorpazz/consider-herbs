import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl lg:text-4xl">ConsiderHerbs</Link>
          <div className="block sm:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-50 appearance-none focus:outline-none"
              onClick={() => setMenu(menu => !menu)}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <ul className="inline-flex">
              <li><Link to="/" className="px-4 font-bold">Home</Link></li>
              <li><Link to="/shop/" className="px-4 hover:opacity-70">Shop</Link></li>
              <li><Link to="/blog/" className="px-4 hover:opacity-70">Blog</Link></li>
              <li><Link to="/about/" className="px-4 hover:opacity-70">About</Link></li>
            </ul>
          </div>
        </div>
        {menu ? <div className="bg-white w-full fixed block sm:hidden shadow">
          <ul className="mb-3 ">
            <li><Link to="/" className="px-6 text-xl font-bold font-bold">Home</Link></li>
            <li><Link to="/shop/" className="px-6 text-xl font-bold hover:opacity-70">Shop</Link></li>
            <li><Link to="/blog/" className="px-6 text-xl font-bold hover:opacity-70">Blog</Link></li>
            <li><Link to="/about/" className="px-6 text-xl font-bold hover:opacity-70">About</Link></li>
          </ul>
        </div> : <div></div>}


      </nav>
    </header>
  );
}

export default Header;