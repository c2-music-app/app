import axios from 'axios'

export const getMusic = () => {
    // Thunk Function
    return async (dispatch) => {
      try {
        const response = await axios.get(
          "https://spotify23.p.rapidapi.com/playlist_tracks/",
          {
            params: {
                id: '37i9dQZF1DX4Wsb4d7NKfP',
                offset: '0',
                limit: '100'
              },
              headers: {
                'X-RapidAPI-Key': '22bc454fefmshd6950baf655c266p1285c6jsn42e06c0ea81e',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
              },
          }
        );
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
  