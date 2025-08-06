"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setDropdownActive(false); // Close dropdown when menu closes
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownActive(!dropdownActive);
  };

  return (
    <nav className="terrapix-nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-container">
          <Link href="/" className="logo" id="logo">
            <span className="logo-text">Terrapix</span>
            <span className="logo-dot"></span>
            <span className="logo-com">.com</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`} id="nav-links">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>

          {/* Dropdown */}
          <li className={`nav-item dropdown ${dropdownActive ? "active" : ""}`}>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  toggleDropdown(e);
                }
              }}
            >
              Categories <i className="fas fa-chevron-down dropdown-icon"></i>
            </a>
            <div className={`dropdown-menu ${dropdownActive ? "show" : ""}`}>
              <div className="dropdown-grid">
                <Link href="/categories/nature" className="category-item">
                  <div className="category-icon nature"></div>
                  <span>Nature</span>
                </Link>
                <Link href="/categories/abstract" className="category-item">
                  <div className="category-icon abstract"></div>
                  <span>Abstract</span>
                </Link>
                <Link href="/categories/cities" className="category-item">
                  <div className="category-icon city"></div>
                  <span>Cities</span>
                </Link>
                <Link href="/categories/space" className="category-item">
                  <div className="category-icon space"></div>
                  <span>Space</span>
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/premium" className="nav-link">Premium</Link>
          </li>
          <li className="nav-item">
            <Link href="/upload" className="nav-link">Upload</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
