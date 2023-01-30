import {configureStore} from "@reduxjs/toolkit";
import randomReducer from "./random/randomSlice"

export const store = configureStore({
    reducer:{
        random: randomReducer,
    },
})