import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    columns: PropTypes.array

}
static defaultProps = {
  description: settings.defaultListDescription,
}
  render() {
    return (
        <section className={styles.component}>
          <Hero titleText={this.props.title}
            homeImage={this.props.image} />
          <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
          </div>
          <div className={styles.columns}>
          {this.props.columns.map(item => (
                  <Column key={item.title} title={item.title}/>

))}

          </div>
        </section>
    )
  }
}

export default List;
