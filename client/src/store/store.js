import { configureStore } from "@reduxjs/toolkit";
// import MusicReducer from "../reducers/MusicReducer";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
   
  },
  middleware: [thunk]
});