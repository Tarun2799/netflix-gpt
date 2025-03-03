import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// it will takes the configuration
const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;