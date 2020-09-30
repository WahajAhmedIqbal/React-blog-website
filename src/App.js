import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <h2>Wahaj React developer</h2>
      <Header />
      <Home />
      <Hero />
    </div>
  );
}

export default App;
