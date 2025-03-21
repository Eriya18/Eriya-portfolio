import { useState } from "react";
import React from 'react';
import styles from "./Navbar.module.css";

export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        {/* Updated image source */}
        <img 
          className={styles.menuBtn} 
          src={getImageUrl(menuOpen ? "assets/nav/closeIcon.png" : "assets/nav/MenuIcon.png")} 
          alt="Menu Icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
