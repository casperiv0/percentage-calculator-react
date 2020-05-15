import React, { Component } from 'react';
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
  Typography
} from '@material-ui/core';

export default class CalculatePercentage extends Component {
  constructor() {
    super();

    this.state = {
      percentage: '',
      amount: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { percentage, amount } = this.state;

    this.props.calculatePercentage(percentage, amount);
  };

  handlePercentage = (e) => {
    this.setState({
      percentage: e.target.value,
    });
  };

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };


  render() {
    const { percentage, amount } = this.state;
    return (
      <div className='container'>
        <Typography  variant="h4">Calculate Amount</Typography>
        <form onSubmit={this.onSubmit}>
          <FormControl fullWidth>
            <InputLabel>Enter Percentage (%)</InputLabel>
            <Input type="number" onChange={this.handlePercentage} value={percentage} />
            <FormHelperText>E.G. 10%</FormHelperText>
          </FormControl>
          <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel>Enter Amount</InputLabel>
            <Input type="number" onChange={this.handleAmount} value={amount} />
            <FormHelperText>E.G. 1000</FormHelperText>
          </FormControl>
        <FormControl fullWidth  style={{marginTop: "20px"}}>
            <Button variant="contained" color="inherit" type="submit">Calculate!</Button>
        </FormControl>
        </form>
      </div>
    );
  }
}
