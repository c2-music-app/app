// import { configureStore } from "@reduxjs/toolkit";
// // import MusicReducer from "../reducers/MusicReducer";
// import thunk from "redux-thunk";

// export default configureStore({
//   reducer: {
   
//   },
//   middleware: [thunk]
// });

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;