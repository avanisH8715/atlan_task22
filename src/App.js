import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/home";

function App() {
  return (
    <section className="App">
      <Home />
    </section>
  );
}

export default App;