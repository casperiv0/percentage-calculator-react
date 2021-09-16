import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <h1>Percentage Calculator</h1>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Dev-CasperTheGhost/percentage-calculator-react"
        >
          Source Code
        </a>
      </nav>
    );
  }
}
