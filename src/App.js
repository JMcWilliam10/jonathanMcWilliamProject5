import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Selection from "./Components/Selection";
import Footer from "./Components/Footer";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Hero />
          <Selection />
          <Footer copyright="Jonathan McWilliam &copy;" />
        </div>
      </div>
    );
  }
}

export default App;
