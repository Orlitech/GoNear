import React, { useState, useEffect } from "react";
import Logo from "../../assets/8169b42adc2aef3a61b2bad03377c6a5-removebg-preview.png";
import {Link} from 'react-router-dom'
import NavLinks from "./NavLinks";
import StructureLink from "./StructureLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Persist dark mode state
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Feature 1: Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Feature 2: Apply dark mode on mount
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  // Feature 3: Toggle dark mode and persist state
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  // Feature 4: Toggle responsive mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Feature 5: Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".header")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);


   // Link structure
   
   const LinkStructure = (constructor) => {
    return (
      <StructureLink 
      link={constructor.link}
      label={constructor.label}
      icon={constructor.icon}
      />
    )
   }
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Near Logo" className="logo" />
          
        </Link>
      </div>

      {/* Feature 6: Hamburger menu for mobile */}
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {NavLinks.map(LinkStructure)}   
        
        </ul>
      </nav>

      <div className="actions">
        {/* Feature 7: Dark mode toggle button */}
        <button type="button" className="btn btn-outline-secondary me-2" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Link to='/Log' type="button" className="btn btn-outline-primary me-2">Login</Link>
        
      </div>
    </header>
  );
};

export default Header;
