import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./containers/ContactUs/ContactUs";
import Post from "./containers/Post/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Wahaj React developer</h2>
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
