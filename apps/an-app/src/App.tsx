import React from "react";
import { Button, Header } from "ui";
import { Input } from "./components";

const App = () => (
  <div className="App" data-testid="app_container">
    <Button label="button" />
    <Header>Hi</Header>
    <Input />
    <p>AN APPLE</p>
  </div>
);

export default App;
