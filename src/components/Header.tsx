"use client";

import Image from "next/image";
import Link from "next/link";
import Instagram from "@/../public/instagram.svg";
import Telegram from "@/../public/telegram.svg";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from '@/../public/logo.png'
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const joinRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setJoinOpen(false);
  }, [pathname]);

  // Close join dropdown & mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (joinRef.current && !joinRef.current.contains(event.target as Node)) {
        setJoinOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            <Image src={Logo} alt="bugbuster.uz" className="h-10 w-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-semibold items-center">
            <li><Link href="/" className="hover:text-gray-300">Bosh Sahifa</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Loyihalar</Link></li>
            <li><Link href="/certificates" className="hover:text-gray-300">Sertifikatlar</Link></li>
            <li><Link href="/team" className="hover:text-gray-300">Jamoa</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">Haqida</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Bog'lanish</Link></li>
          </ul>
        </nav>

        {/* Social + Join desktop */}
        <div className="hidden md:flex items-center space-x-3 ml-4">
          <a href="https://www.instagram.com/musl.imbek_008" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" width={28} height={28} className="rounded" />
          </a>
          <a href="https://t.me/bug_buster_challenge" target="_blank" rel="noopener noreferrer">
            <Image src={Telegram} alt="Telegram" width={28} height={28} className="rounded" />
          </a>

          {/* Join dropdown */}
          <div ref={joinRef} className="relative">
            <button
              onClick={() => setJoinOpen(!joinOpen)}
              className="ml-4 cursor-pointer bg-[#011a33] text-white px-5 py-2 rounded-full border border-white hover:bg-white hover:text-[#011a33] transition-all duration-300 font-semibold"
            >
              Qo‘shilish
            </button>
            {joinOpen && (
              <ul className="absolute top-full mt-2 right-0 bg-white text-black rounded shadow w-48 flex flex-col z-50">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScif6s0eoKD0u46dW6vR9TN-Rh1fZKhgJ8j9RAhu9rKYzUnmQ/alreadyresponded" target="_blank" rel="noopener noreferrer" onClick={() => setJoinOpen(false)}>
                    Ishtirok etish
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/jointeam" onClick={() => setJoinOpen(false)}>Jamoaga qo‘shilish</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden backdrop-blur-md bg-[#01172C]/70 shadow-md rounded-b-xl px-6 pb-6 pt-4 text-white transition-all duration-300">
          <ul className="flex flex-col space-y-4 font-medium tracking-wide">
            <li><Link href="/" className="hover:text-gray-300">Bosh Sahifa</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Loyihalar</Link></li>
            <li><Link href="/certificate" className="hover:text-gray-300">Sertifikatlar</Link></li>
            <li><Link href="/team" className="hover:text-gray-300">Jamoa</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">Haqida</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Bog'lanish</Link></li>
          </ul>

          {/* Social + Join mobile */}
          <div className="flex space-x-4 mt-6 items-center">
            <div ref={joinRef} className="relative">
              <button
                onClick={() => setJoinOpen(!joinOpen)}
                className=" bg-[#011a33] text-white px-5 py-2 rounded-full border border-white hover:bg-white hover:text-[#011a33] transition-all duration-300 font-semibold"
              >
                Qo‘shilish
              </button>
              {joinOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow w-48 flex flex-col z-50">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScif6s0eoKD0u46dW6vR9TN-Rh1fZKhgJ8j9RAhu9rKYzUnmQ/alreadyresponded" target="_blank" rel="noopener noreferrer" onClick={() => setJoinOpen(false)}>
                      Ishtirok etish
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/jointeam" onClick={() => setJoinOpen(false)}>Jamoaga qo‘shilish</Link>
                  </li>
                </ul>
              )}
            </div>
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
