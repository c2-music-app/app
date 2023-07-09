import axios from 'axios'

export const handleSignUp = (user) => {
    // Thunk Function
    return async (dispatch) => {
      try {
        const response = await axios.post("http://localhost:5000/signUp",user)
              
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch({
          type: "SET_USER",
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };