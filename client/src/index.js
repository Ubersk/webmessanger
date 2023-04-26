import React, { createContext } from "react";
import App from "./App";
import UserStore from "./store/UserStore";
import MailStore from "./store/MailStore";
import { createRoot } from "react-dom/client";

export const Context = createContext();


const root = createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      userStore: new UserStore(),
      mailStore: new MailStore(),
    }}
  >
    <App />
  </Context.Provider>
);
