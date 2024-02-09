import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./Slices/mainSlice";

const store = configureStore({
    reducer: {
        mainSlice,
    }
});

export default store;