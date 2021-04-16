const INITIAL_STATE = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return state;
  }
};

export default reducer;
