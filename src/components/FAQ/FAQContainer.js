import { connect } from 'react-redux';
import Faq from './FAQ.js';

const mapStateToProps = state => ({
  titleFaq: state.faq.titleFaq,
  imageFaq: state.faq.imageFaq,
  description: state.info.description,
  title: state.info.title,
});

export default connect(mapStateToProps)(Faq);