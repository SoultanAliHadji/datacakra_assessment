import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pageReducer from "./pageSlice";
import destinationReducer from "./destinationSlice";

export default configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
    destination: destinationReducer,
  },
});
