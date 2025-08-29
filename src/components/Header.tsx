"use client";

import Image from "next/image";
import Link from "next/link";
import Instagram from "@/../public/instagram.svg";
import Telegram from "@/../public/telegram.svg";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '@/../public/logo.png'
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled || isOpen ? "bg-[#01172C]/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={Logo} alt="bugbuster.uz" className="h-10 w-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-semibold">
            <li><Link href="/" className="hover:text-gray-300">Bosh Sahifa</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Loyihalar</Link></li>
            <li><Link href="/filmlar" className="hover:text-gray-300">Filmlar</Link></li>
            <li><Link href="/seriallar" className="hover:text-gray-300">Seriallar</Link></li>
            <li><Link href="/multfilmlar" className="hover:text-gray-300">Multfilmlar</Link></li>
            <li><Link href="/team" className="hover:text-gray-300">Jamoa</Link></li>
            <li><Link href="/sertificate" className="hover:text-gray-300">Sertifikatlar</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">Haqida</Link></li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex space-x-3">
          <a href="https://www.instagram.com/musl.imbek_008" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" width={28} height={28} className="rounded" />
          </a>
          <a href="https://t.me/bug_buster_challenge" target="_blank" rel="noopener noreferrer">
            <Image src={Telegram} alt="Telegram" width={28} height={28} className="rounded" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#01172C]/70 shadow-md rounded-b-xl px-6 pb-6 pt-4 text-white transition-all duration-300">
          <ul className="flex flex-col space-y-4 font-medium tracking-wide">
            <li><Link href="/" className="hover:text-gray-300">Bosh Sahifa</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Loyihalar</Link></li>
            <li><Link href="/filmlar" className="hover:text-gray-300">Filmlar</Link></li>
            <li><Link href="/seriallar" className="hover:text-gray-300">Seriallar</Link></li>
            <li><Link href="/multfilmlar" className="hover:text-gray-300">Multfilmlar</Link></li>
            <li><Link href="/team" className="hover:text-gray-300">Jamoa</Link></li>
            <li><Link href="/sertificate" className="hover:text-gray-300">Sertifikatlar</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">Haqida</Link></li>
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