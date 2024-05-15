import React from "react";
import Counter from "./CounterComponent";
import UserComponent from "./UserComponent";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <UserComponent />
    </div>
  );
};

export default App;
