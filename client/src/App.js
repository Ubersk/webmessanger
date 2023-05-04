import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import {check} from "./http/UserAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    check()
      .then((data) => {
        userStore.setUser(data);
        userStore.setIsAuth(true);

      })
      .finally(() => setLoading(false));
    console.log(userStore.isAuth)
    
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
