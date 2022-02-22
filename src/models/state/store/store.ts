import {configureStore, EnhancedStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {Persistor, persistStore} from "redux-persist";
import {IGlobalState} from "models/state/_models";
import persistedReducer from "models/state/store/persistedReducer";

export type EnhancedGlobalStore = EnhancedStore<IGlobalState, any, any>;

interface IGlobalStore {
  store: EnhancedGlobalStore;
  persistor: Persistor;
}

const middlewares = getDefaultMiddleware({
  serializableCheck: false,
});

// ---------------------- add flipper --------------------- //
if (__DEV__) {
  const reduxDebugger = require("redux-middleware-flipper").default;

  middlewares.push(reduxDebugger({}));
}

const createStore = (): IGlobalStore => {
  const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
    middleware: middlewares,
    devTools: true,
  });
  const persistor: Persistor = persistStore(store);

  return {store, persistor};
};

const Store: IGlobalStore = createStore();

export default Store;
