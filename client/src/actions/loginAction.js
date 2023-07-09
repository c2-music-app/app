import axios from 'axios'

export const handleLogin = (user) => {
    // Thunk Function
    return async (dispatch) => {
      try {
        const response = await axios.post("http://localhost:5000/login",user)
              
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data );
        dispatch({
          type: "SET_USER",
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };