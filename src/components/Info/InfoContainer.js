import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  titleInfo: state.info.titleInfo,
  imageInfo: state.info.imageInfo,
});

export default connect(mapStateToProps)(Info);
