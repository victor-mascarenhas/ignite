const INITIAL_STATE = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoading: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
        isLoading: false,
      };
    case "LOADING_GAMES":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return state;
  }
};

export default reducer;
