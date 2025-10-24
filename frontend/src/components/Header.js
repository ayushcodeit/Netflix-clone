import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <nav className="header__nav">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">My List</a>
      </nav>
    </header>
  );
}

export default Header;