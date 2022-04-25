import React from "react";
import "./App.css";
import { OFF_WHITE } from "constant";
import { Header } from "ui";

const App = () => (
  <div
    className="App"
    data-testid="app_container"
    style={{ backgroundColor: OFF_WHITE.default }}
  >
    <Header>Auth</Header>
  </div>
);

export default App;
