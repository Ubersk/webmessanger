import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import MailStore from "./store/MailStore";
import { createRoot } from "react-dom/client";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);

const root = createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      mail: new MailStore(),
    }}
  >
    <App />
  </Context.Provider>
);