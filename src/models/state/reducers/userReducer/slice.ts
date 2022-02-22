import {createSlice} from "@reduxjs/toolkit";
import {InitialState} from "./initialState";
import actions from "./actions";

const Slice = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {...actions},
});

export default Slice;
