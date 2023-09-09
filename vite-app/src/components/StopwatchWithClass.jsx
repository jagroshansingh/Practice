import React, { Component } from "react";

class StopwatchWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
    this.instance = null;
  }
  start() {
    clearInterval(this.instance);
    this.instance = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  stop() {
    clearInterval(this.instance);
  }
  reset() {
    clearInterval(this.instance)
    this.setState({timer:0})
  }
  render() {
    return (
      <div>
        <p>Timer: {this.state.timer}</p>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export { StopwatchWithClass };
