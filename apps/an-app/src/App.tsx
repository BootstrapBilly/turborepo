import React from "react";
import "./App.css";
import { OFF_WHITE } from "constant";
import { Button } from "ui";

const App = () => (
  <div
    className="App"
    data-testid="app_container"
    style={{ backgroundColor: OFF_WHITE.default }}
  >
    <Button label="a" />
  </div>
);

export default App;
