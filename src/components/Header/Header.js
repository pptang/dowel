import React from 'react';
import './Header.css';

const Links = [
  {
    url: 'http://creativemashimashi.com/',
    title: 'Home',
  },
  {
    url: 'http://creativemashimashi.com/dowel',
    title: 'Product',
  },
];

const Header = () => (
  <header className="App-header">
    <img className="Logo" src="logo.svg" alt="logo" width="180" height="180" />
    <img
      className="Dowel"
      src="dowel.svg"
      alt="title"
      width="180"
      height="78"
    />
    <nav>
      <ul className="Nav-link-list">
        {Links.map((link) => (
          <li>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
