import createFilter from "redux-persist-transform-filter";
import {persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import rootSlice from "./slice";

const reducerTransform = createFilter("root", ["persistData"]);

const persistedRootReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["persistData"],
  },
  rootSlice.reducer,
);

const Reducer = {
  transform: reducerTransform,
  reducer: persistedRootReducer,
  actions: rootSlice.actions,
};

export default Reducer;
