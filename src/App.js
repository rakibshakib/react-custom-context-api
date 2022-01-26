import "./App.css";
import Home from "./components/Home/Home";
import React from "react";

export default class App extends React.Component {
  state = {
    theme: "default",
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <h2>this is class</h2>
        <Home theme={theme} />
      </div>
    );
  }
}
