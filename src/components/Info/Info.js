import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import styles from '../Container/Container.scss';

const Info = (props) => (
  //console.log('infoProps',props),
  
  <Container>
    <Hero titleText={props.titleInfo}
      homeImage={props.imageInfo} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <div className={styles.links}>
      <h2><a href="https://www.comperialead.pl/a/pp_adserwer.php?link=aa61bd2aa0669830437a7b166954ca2a&etykieta_=mBank" rel="nofollow, noindex">mBank premia 100 zł + 50 zł</a></h2>
      <h2><a href="https://www.comperialead.pl/a/pp_adserwer.php?link=a00fd1c9e73bdb55ade5dfd38f659e17&etykieta_=Millenium" rel="nofollow, noindex">Millenium Bank z premią 200 zł</a></h2>
    </div> 
  </Container>   
 
);

Info.propTypes = {
  titleInfo: PropTypes.node,
  imageInfo: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Info;

