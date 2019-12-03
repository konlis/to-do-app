import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = (props) => (
  console.log(props),
  
  <Container>
    <Hero titleText={props.titleInfo}
      homeImage={props.imageInfo} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </Container>
);

Info.propTypes = {
  titleInfo: PropTypes.node,
  imageInfo: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Info;
