import React from 'react';
import './Footer.css';

const SocialLinks = [
  {
    url: 'mailto:jasperwu314@gmail.com',
    alt: 'Email',
    img: 'mail.svg',
  },
  {
    url: 'https://www.facebook.com/creativemashimashi/',
    alt: 'Facebook',
    img: 'facebook.svg',
  },

  {
    url: 'https://twitter.com/creativemashi2',
    alt: 'Twitter',
    img: 'twitter.svg',
  },
];

const Footer = () => (
  <footer className="Footer">
    <ul className="Footer-link-list">
      {SocialLinks.map((link) => (
        <li>
          <a href={link.url}>
            <img src={link.img} alt={link.alt} width="24" height="24" />
          </a>
        </li>
      ))}
    </ul>
    <p className="Copyright">©2021 Mashimahsi, Inc</p>
  </footer>
);

export default Footer;
