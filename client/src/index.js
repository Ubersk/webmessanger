import React, { createContext } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import MailStore from "./store/MailStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    mail: new MailStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)

