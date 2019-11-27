import { connect } from 'react-redux';
import Column from './Column.js';

const mapStateToProps = (state, props) => ({
  cards: getColumnsForList(state, props.id),
});

export const getColumnsForList = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(Column);