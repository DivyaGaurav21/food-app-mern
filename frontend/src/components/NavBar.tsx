import React, { useState, useEffect } from "react";
import { ShoppingCart, Apple } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Menu", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold flex items-center gap-1">
          <span className="text-orange-500">
            <Apple />
          </span>{" "}
          FoodKart<span className="text-orange-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-orange-500 text-sm transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <ShoppingCart className="text-white w-5 h-5 cursor-pointer hover:text-orange-500" />

          {/* Auth Button */}
          <button className="hidden md:block border border-orange-500 text-orange-500 px-4 py-1.5 rounded-md text-sm hover:bg-orange-500 hover:text-white transition">
            Sign In/Sign Up
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-300 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
            Sign In/Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
