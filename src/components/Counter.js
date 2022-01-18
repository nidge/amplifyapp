import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
      super(props);
      this.state = { currentCount: 0, randomNumer: Math.random() };
      this.incrementCounter = this.incrementCounter.bind(this);
      this.getRandomNumber = this.getRandomNumber.bind(this);
      
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 5
    });
    }

    getRandomNumber() {
        this.setState({
            randomNumer: Math.random()
        });
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>

            <p> Random number {this.state.randomNumer} </p>
            <button onClick={this.getRandomNumber}>Get random number </button>

      </div>
    );
  }
}
