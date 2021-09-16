import React, { Component } from "react";
import Header from "./components/Header";
import CalculatePercentage from "./components/CalculatePercentage";
import GetPercentage from "./components/GetPercentage";
import { Typography } from "@mui/material";

class App extends Component {
  constructor() {
    super();

    this.state = {
      answer: "",
      answer2: "",
    };
  }

  calculatePercentage = (percentage, amount) => {
    const answer = (percentage / 100) * amount;

    this.setState({
      answer: answer,
    });
  };

  getPercentage = (amount, amount2) => {
    const answer2 = (100 / amount2) * amount;

    this.setState({
      answer2: answer2 + "%",
    });
  };

  render() {
    const { answer, answer2 } = this.state;
    return (
      <div className="App">
        <Header />
        <CalculatePercentage calculatePercentage={this.calculatePercentage} />
        <div className="container">
          <Typography variant="h3">Answer is: {answer}</Typography>
        </div>

        <GetPercentage getPercentage={this.getPercentage} />
        <div className="container">
          <Typography variant="h3">Answer is: {answer2}</Typography>
        </div>
      </div>
    );
  }
}

export default App;

/*

CALCULATION:

percentage /  100 * a = amount

100 / amount * a = needed

*/
