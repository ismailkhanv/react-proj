import { createSlice } from "@reduxjs/toolkit";


export const newSlice = createSlice({
   name: 'inputchangetrack',
   initialState: {inputvalue : '',textCount: 0},
   reducers:{
      formDisplay : (state,action)=>{ state.inputvalue = action.payload },
      textCountDisplay :(state,action)=>{ state.textCount = action.payload }
   }
})

export const {formDisplay,textCountDisplay} = newSlice.actions