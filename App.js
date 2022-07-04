import React from "react";
import {Text,View,Button} from "react-native";
import { Provider } from "react-redux";
import AppWraper from "./Src/AppWraper";
import {store} from './Src/redux/store';
import { persistor } from "./Src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from "./Src/Navigation";

const App=()=>{
  return(
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
          <Navigation/>
      </PersistGate>
    </Provider>
  )
}
export default App;