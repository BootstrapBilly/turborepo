import React from "react";
import { Button } from "ui";
import { Input } from "./components";

const App = () => (
  <div className="App" data-testid="app_container">
    <Button label="a" />
    <Input />
    <p>AN APPLE</p>
  </div>
);

export default App;
