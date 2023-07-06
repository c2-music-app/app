const initState = {
    music: []
  };
  
  const MusicReducer = (state = initState, action) => {
  
    switch (action.type) {
   
      case "GET_MUSIC": return {...state, music: action.payload};
      default:
        return state;
    }
  };
  
  export default MusicReducer;
  