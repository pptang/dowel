import React from 'react';
import { ADD_TO_SLACK } from '../../constants';
import './Top.css';

const Top = () => (
  <section className="Top">
    <article className="Top-title">
      Hi👋 I am DOWEL. I am here to help your teams and groups to develop
      meaningful and engaging conversations.🤝
    </article>
    <a className="Top-add-to-slack" href={ADD_TO_SLACK}>
      Add to Slack 🙌
    </a>
  </section>
);

export default Top;
