import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Front from "../Front/Front.js";
import Page from "../Page/Page.js";

var http = require("http");
setInterval(function() {
  http.get("uottahack.ca/");
}, 300000); // every 5 minutes (300000)

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    this.setState({
      sections: [
        {
          sectionName: "What is uOttaHack?",
          subtitle: ""
        },

        {
          sectionName: "Our Events & Initiatives",
          subtitle: "Endeavours we're proud to lead"
        },
        {
          sectionName: "Get in touch",
          subtitle: ""
        },
        {
          sectionName: "Our Team",
          subtitle: ""
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Front />
        <Page section={this.state.sections} />
      </div>
    );
  }
}

export default App;
