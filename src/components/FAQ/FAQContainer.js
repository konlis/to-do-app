import { connect } from 'react-redux';
import Faq from './Faq';

const mapStateToProps = state => ({
  titleFaq: state.faq.titleFaq,
  imageFaq: state.faq.imageFaq,
});

export default connect(mapStateToProps)(Faq);