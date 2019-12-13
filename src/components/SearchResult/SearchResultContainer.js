import { connect } from 'react-redux';
import { getCardsForSearch, createAction_changeSearchString } from '../../redux/cardsRedux.js';
import SearchResult from './SearchResult.js';

const mapStateToProps = (state, props, searchString) => ({
  cards: getCardsForSearch(state, props.match.params.searchString ),
  filteredCards: state.cards.filter(card => card.title.includes(searchString)),
});
//console.log(mapStateToProps.filteredCards);

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);