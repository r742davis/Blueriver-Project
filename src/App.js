import React from 'react';
import AppContainer from "./containers/AppContainer";
import { Provider } from "react-redux";
import store from "./store";
import "./theme/theme.css";


function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
