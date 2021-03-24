import React from 'react';
import Footer from '../Footer/Footer';

import './Intro.css';

const Contents = [
  {
    img: {
      src: 'question.svg',
      alt: 'question',
    },
    title: 'Question 📝',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
  {
    img: {
      src: 'chart.svg',
      alt: 'chart',
    },
    title: 'Chart 📊',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
  {
    img: {
      src: 'dialog.svg',
      alt: 'dialog',
    },
    title: 'Dialog 💬',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
];

const Intro = () => (
  <section className="Intro">
    <div className="Intro-title">
      <h2>We made it.🎉</h2>
      <ul className="Intro-title-list">
        <li>Establish a good RELATIONSHIP in just minutes 😍</li>
        <li>
          Engage with new normal, new relationships without additional effort.
        </li>
        <li>
          ✅ Ease of use ✅ Breaking the ice with new faces ✅ Getting along
          with fellow workers
        </li>
      </ul>
    </div>

    <div className="Intro-content">
      {Contents.map((content) => (
        <article key={content.alt} className="Intro-content-article">
          <img
            className="Intro-content-img"
            src={content.img.src}
            alt={content.img.alt}
            width="384"
            height="355"
          />
          <h4>{content.title}</h4>
          <p>{content.description}</p>
        </article>
      ))}
    </div>
    <Footer />
  </section>
);

export default Intro;
