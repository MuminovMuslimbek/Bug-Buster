"use client";

import Image from 'next/image';
import Link from 'next/link';
import Instagram from '@/../public/instagram.png';
import Telegram from '@/../public/telegram.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#00162B] text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="iTV.uz" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/tv" className="hover:text-gray-300 font-semibold">TV</Link>
            </li>
            <li>
              <Link href="/filmlar" className="hover:text-gray-300 font-semibold">Filmlar</Link>
            </li>
            <li>
              <Link href="/seriallar" className="hover:text-gray-300 font-semibold">Seriallar</Link>
            </li>
            <li>
              <Link href="/multfilmlar" className="hover:text-gray-300 font-semibold">Multfilmlar</Link>
            </li>
            <li>
              <Link href="/anime" className="hover:text-gray-300 font-semibold">Anime</Link>
            </li>
            <li>
              <Link href="/live" className="hover:text-gray-300 font-semibold">Live</Link>
            </li>
            <li>
              <Link href="/tariflar" className="hover:text-gray-300 font-semibold">Tariflar</Link>
            </li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex space-x-3">
          <a
            href="https://www.instagram.com/musl.imbek_008"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              width={28}
              height={28}
              className="rounded"
            />
          </a>
          <a
            href="https://t.me/bug_buster_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src={Telegram}
              alt="Telegram"
              width={28}
              height={28}
              className="rounded"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#00162B] px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            <li><Link href="/tv" className="hover:text-gray-300">TV</Link></li>
            <li><Link href="/filmlar" className="hover:text-gray-300">Filmlar</Link></li>
            <li><Link href="/seriallar" className="hover:text-gray-300">Seriallar</Link></li>
            <li><Link href="/multfilmlar" className="hover:text-gray-300">Multfilmlar</Link></li>
            <li><Link href="/anime" className="hover:text-gray-300">Anime</Link></li>
            <li><Link href="/live" className="hover:text-gray-300">Live</Link></li>
            <li><Link href="/tariflar" className="hover:text-gray-300">Tariflar</Link></li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="https://www.instagram.com/itvuz" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://t.me/itvuz" target="_blank" rel="noopener noreferrer">
              <Image src={Telegram} alt="Telegram" width={28} height={28} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;