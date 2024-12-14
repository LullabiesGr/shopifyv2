import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-cyber-blue font-bold text-2xl tracking-wider">DIVO.AI</div>
        <div className="hidden md:flex space-x-8">
          {['Subscribe', 'Discord', 'Telegram', 'Blog', 'Docs'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden text-cyber-blue">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;