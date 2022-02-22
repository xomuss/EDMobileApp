import {createSlice} from "@reduxjs/toolkit";
import {InitialState} from "models/state/reducers/rootReducer/initialState";
import actions from "models/state/reducers/rootReducer/actions";

const Slice = createSlice({
  name: "root",
  initialState: InitialState,
  reducers: {...actions},
});

export default Slice;
