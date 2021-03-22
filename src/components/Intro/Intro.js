import React from 'react';
import './Intro.css';

const Contents = [
  {
    img: {
      src: 'question.png',
      alt: 'question',
    },
    title: 'Question 📝',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
  {
    img: {
      src: 'chart.png',
      alt: 'chart',
    },
    title: 'Chart 📊',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
  {
    img: {
      src: 'connect.png',
      alt: 'connect',
    },
    title: 'Connect 💬',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcublandit id nisi, quam integer consequat dui.',
  },
];

const Intro = () => (
  <section className="Intro">
    <h2>What I Can do. 😍</h2>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor arcu
      blandit id nisi, quam integer consequat dui.
    </h3>
    <div className="Intro-content">
      {Contents.map((content) => (
        <article>
          <img
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
  </section>
);

export default Intro;
