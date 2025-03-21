import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "/assets/nav/MenuIcon.png";
import CloseIcon from "/assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        {/* Updated image import instead of dynamic URL */}
        <img 
          className={styles.menuBtn} 
          src={menuOpen ? CloseIcon : MenuIcon} 
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
