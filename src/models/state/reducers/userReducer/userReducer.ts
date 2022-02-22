import createFilter from "redux-persist-transform-filter";
import {persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import userSlice from "./slice";

const reducerTransform = createFilter("user", ["persistData"]);

const persistedRootReducer = persistReducer(
  {
    key: "user",
    storage: AsyncStorage,
    whitelist: ["persistData"],
  },
  userSlice.reducer,
);

const Reducer = {
  transform: reducerTransform,
  reducer: persistedRootReducer,
  actions: userSlice.actions,
};

export default Reducer;
