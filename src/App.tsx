import React from "react";
import AppNavigatorContainer from "navigation/AppNavigatorContainer";
import Store from "models/state/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {AppearanceProvider} from "react-native-appearance";

const App = () => {
  const {store, persistor} = Store;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppearanceProvider>
          <AppNavigatorContainer />
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
