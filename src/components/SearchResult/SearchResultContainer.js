import { connect } from 'react-redux';
import { getCardsForSearch, createAction_changeSearchString } from '../../redux/cardsRedux.js';
import SearchResult from './SearchResult.js';

const mapStateToProps = (state, props, searchString) => ({
  cards: getCardsForSearch(state, props.match.params.searchString && state.cards.filter(card => card.title.includes(searchString))),
//   const filteredCards = state.cards.filter(card => card.title.includes(searchString));
});
//console.log(getCardsForSearch);
const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);