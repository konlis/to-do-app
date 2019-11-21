import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,

}
static defaultProps = {
  children: <p>I can do all the things!!!</p>,
}
  render() {
    return (
        <section className={styles.component}>
          <Hero titleText={this.props.title}
            image={this.props.image} />
          <div className={styles.description}>
          {this.props.children}
          </div>
          //<Hero mainImage={this.props.image} />
        </section>
    )
  }
}

export default List;
