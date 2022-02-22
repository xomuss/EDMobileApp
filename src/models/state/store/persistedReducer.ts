import AsyncStorage from "@react-native-community/async-storage";
import {persistCombineReducers} from "redux-persist";
import RootReducer from "models/state/reducers/rootReducer/rootReducer";
import UserReducer from "models/state/reducers/userReducer/userReducer";

const persistedReducer = persistCombineReducers(
  {
    storage: AsyncStorage,
    key: "persistedReducer",
    whitelist: ["rootReducer", "userReducer"],
    transforms: [RootReducer.transform, UserReducer.transform],
  },
  {
    root: RootReducer.reducer,
    user: UserReducer.reducer,
  },
);

export default persistedReducer;
