import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./components/HomePage";
import Stack from "./components/Stack";
import Queue from "./components/Queue";
import "./App.css";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={400}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <Switch>
        <Route path="/stack">
          <Stack>
            <div>The is homepage</div>
          </Stack>
        </Route>
        <Route path="/queue">
          <Queue />
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
