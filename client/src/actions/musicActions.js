import axios from 'axios'

export const getMusic = (url) => {
    // Thunk Function
    return async (dispatch) => {
      try {
        const response = await axios.get(
          url      );
        const data = response.data.items;
        dispatch({
          type: "GET_MUSIC",
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
export const setCurrentMusic = (music) => {

  return {
    type: "SET_MUSIC",
    payload: music,
  }


}

export const getTrendingMusic = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/6efad571-22f8-43e7-9e36-c7c71ac41798"
      );
      const data = response.data.items;
      console.log(data);
      dispatch({
        type: "GET_Trending_Music",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}



