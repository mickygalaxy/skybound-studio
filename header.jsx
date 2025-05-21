import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  const menuItems = [
    { id: 1, label: "Home", link: "#" },
    { id: 2, label: "Services", link: "#" },
    { id: 3, label: "Portfolio", link: "#" },
    { id: 4, label: "About", link: "#" },
    { id: 5, label: "Contact", link: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 mb-10 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
          <h1 className="skybound-text text-2xl font-bold">SKYBOUND</h1>
            <img
              src="src\assets\Logo\hanging-lamp-img.png"
              alt="SKYBOUND Studio Logo"
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
            <h2 className="Studio-text text-2xl font-bold">Studio</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-700" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SKYBOUND Studio
            </span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <FaTimes className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4 bg-purple-400">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg py-2"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;