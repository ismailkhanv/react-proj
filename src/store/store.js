import { configureStore } from "@reduxjs/toolkit";
import { newSlice } from "../slice/slice";


export const newStore = configureStore({
    reducer:{
        slicestore : newSlice.reducer
    }
});

export default newStore


