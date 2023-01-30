import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchText = createAsyncThunk("random/getText", async (paras,type) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${type}`);
    return res.data
  });


export const randomSlice = createSlice({
  name: "random",
  initialState: {
    paras: 1,
    type: "text",
    text: [],
    loading:false
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeParas: (state, action) => {
      state.paras = action.payload;
    },
  },
  extraReducers: {
    [fetchText.fulfilled]: (state, action) => {
        state.loading = false;
      state.text = action.payload
    },
    [fetchText.pending]: (state) => {
        state.loading = true
    }
  },
});

export const { increase, changeType, changeParas } = randomSlice.actions;
export default randomSlice.reducer;
