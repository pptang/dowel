import React, { useState, useEffect } from 'react';
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

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 20) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={isTop ? 'App-header' : 'App-header-fixed'}>
      <img
        className="Logo"
        src="logo.svg"
        alt="logo"
        width="180"
        height="180"
      />
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
      <a className="Nav-add-to-slack" href="">
        Add to Slack 🙌
      </a>
    </header>
  );
};

export default Header;
