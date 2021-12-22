import { EXECUTE_SEARCH } from '../actionTypes'

const initialState = {
  results: null
}; 


function searchReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_SEARCH: {
      return {
           ...state,
          results: action.searchQueryResults
        }
      
      }
    default:
      return state;
  }
}

export default searchReducer;
