import React, { Component } from 'react';
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
  Typography
} from '@material-ui/core';

export default class GetPercentage extends Component {
  constructor() {
    super();

    this.state = {
      amount: '',
      amount2: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { amount, amount2 } = this.state;

    this.props.getPercentage(amount, amount2);
  };

  handleAmount2 = (e) => {
    this.setState({
        amount2: e.target.value,
    });
  };

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };


  render() {
    const { amount, amount2 } = this.state;
    return (
      <div style={{marginTop: "10px", borderTop: "3px solid black", paddingTop: "10px"}} className='container'>
        <Typography variant="h4">Get Percentage</Typography>
        <form onSubmit={this.onSubmit}>
          <FormControl fullWidth>
            <InputLabel>Enter Amount</InputLabel>
            <Input type="number" onChange={this.handleAmount} value={amount} />
            <FormHelperText>E.G. 100</FormHelperText>
          </FormControl>
          <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel>Enter Second Amount</InputLabel>
            <Input type="number" onChange={this.handleAmount2} value={amount2} />
            <FormHelperText>E.G. 1000</FormHelperText>
          </FormControl>
        <FormControl fullWidth  style={{marginTop: "20px"}}>
            <Button variant="contained" color="inherit" type="submit">Get Percentage!</Button>
        </FormControl>
        </form>
      </div>
    );
  }
}
