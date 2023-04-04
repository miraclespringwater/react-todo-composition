import { useState } from "react";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="app">
      <h1>To-Do App</h1>
      <Tasks />
    </div>
  );
};

export default App;
