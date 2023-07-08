const initState = {
    music: [],
    currentMusic: [],
    trendingMusic: [],
  };
  
  const MusicReducer = (state = initState, action) => {
  
    switch (action.type) {
   
      case "GET_MUSIC": return {...state, music: action.payload};
      case "GET_Trending_Music": return {...state, trendingMusic: action.payload};
      case "SET_MUSIC": return {...state, currentMusic: action.payload};
      default:
        return state;
    }
  };
  
  export default MusicReducer;
  