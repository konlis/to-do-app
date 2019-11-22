import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';

class List extends React.Component {
    static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    column: PropTypes.array,

}
static defaultProps = {
  children: <p>I can do all the things!!!</p>,
}
  render() {
      const title = this.props.columns;
      console.log(this.props);
    return (
        <section className={styles.component}>
          <Hero titleText={this.props.title}
            homeImage={this.props.image} />
          <div className={styles.description}>
          {this.props.children}
          </div>
          <div className={styles.columns}>
          {columns.map(col => (
                  <Column key={col.id} {...col} />
))}

          </div>
        </section>
    )
  }
}

export default List;
