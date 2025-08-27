"use client";

import Image from "next/image";
import Link from "next/link";
import Instagram from "@/../public/instagram.png";
import Telegram from "@/../public/telegram.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
  ${scrolled || isOpen ? "bg-[#01172C]/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="iTV.uz" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-semibold">
            <li><Link href="/tv" className="hover:text-gray-300">TV</Link></li>
            <li><Link href="/filmlar" className="hover:text-gray-300">Filmlar</Link></li>
            <li><Link href="/seriallar" className="hover:text-gray-300">Seriallar</Link></li>
            <li><Link href="/multfilmlar" className="hover:text-gray-300">Multfilmlar</Link></li>
            <li><Link href="/anime" className="hover:text-gray-300">Anime</Link></li>
            <li><Link href="/live" className="hover:text-gray-300">Live</Link></li>
            <li><Link href="/tariflar" className="hover:text-gray-300">Tariflar</Link></li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex space-x-3">
          <a
            href="https://www.instagram.com/musl.imbek_008"
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="md:hidden backdrop-blur-md bg-[#01172C]/70 shadow-md rounded-b-xl px-6 pb-6 pt-4 text-white transition-all duration-300">
          <ul className="flex flex-col space-y-4 font-medium tracking-wide">
            <li><Link href="/tv" className="hover:text-gray-300">TV</Link></li>
            <li><Link href="/filmlar" className="hover:text-gray-300">Filmlar</Link></li>
            <li><Link href="/seriallar" className="hover:text-gray-300">Seriallar</Link></li>
            <li><Link href="/multfilmlar" className="hover:text-gray-300">Multfilmlar</Link></li>
            <li><Link href="/anime" className="hover:text-gray-300">Anime</Link></li>
            <li><Link href="/live" className="hover:text-gray-300">Live</Link></li>
            <li><Link href="/tariflar" className="hover:text-gray-300">Tariflar</Link></li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.instagram.com/itvuz" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="Instagram" width={28} height={28} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://t.me/itvuz" target="_blank" rel="noopener noreferrer">
              <Image src={Telegram} alt="Telegram" width={28} height={28} className="hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
