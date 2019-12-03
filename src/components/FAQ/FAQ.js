import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Faq = (props) => (
  <Container>
    <Hero titleText={props.titleFaq}
      homeImage={props.imageFaq} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </Container>
);

Faq.propTypes = {
  titleFaq: PropTypes.node,
  imageFaq: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Faq;