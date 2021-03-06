import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  //console.log('heroprops',props),
  
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.homeImage}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  homeImage: PropTypes.string,
};

export default Hero;
