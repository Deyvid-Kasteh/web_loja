"use client"

// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              LojaBR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/categorias" className="text-gray-700 hover:text-indigo-600 transition">
              Categorias
            </Link>
            <Link href="/ofertas" className="text-gray-700 hover:text-indigo-600 transition">
              Ofertas
            </Link>
            <Link href="/novidades" className="text-gray-700 hover:text-indigo-600 transition">
              Novidades
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-indigo-600 transition">
              Contato
            </Link>
          </nav>

          {/* Search, Cart and User Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="bg-gray-100 rounded-full py-2 pl-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="absolute right-3 top-2.5 text-gray-500 hover:text-indigo-600">
                <Search size={18} />
              </button>
            </div>

            {/* User Account */}
            <Link href="/conta" className="text-gray-700 hover:text-indigo-600">
              <User size={22} />
            </Link>

            {/* Shopping Cart */}
            <Link href="/carrinho" className="relative text-gray-700 hover:text-indigo-600">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/carrinho" className="relative text-gray-700">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="relative mb-4 mt-2">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="bg-gray-100 rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="absolute right-3 top-2.5 text-gray-500 hover:text-indigo-600">
                <Search size={18} />
              </button>
            </div>

            <nav className="flex flex-col space-y-3 pb-3">
              <Link
                href="/categorias"
                className="text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
              >
                Categorias
              </Link>
              <Link
                href="/ofertas"
                className="text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
              >
                Ofertas
              </Link>
              <Link
                href="/novidades"
                className="text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
              >
                Novidades
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-100"
              >
                Contato
              </Link>
              <Link
                href="/conta"
                className="text-gray-700 hover:text-indigo-600 py-2 flex items-center"
              >
                <User size={18} className="mr-2" /> Minha Conta
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;