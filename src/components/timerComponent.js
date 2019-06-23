import React, { Component } from "react";

class Timer extends Component {
    constructor() {
        super();
        this.state = {count: 0}
    }
  
    /**
     * progress timer to next second
     */
    updateTimer = () => {
      const newCount = this.state.count +1;
      this.setState({count: newCount});
    }
  
    /**
     * initiate timer
     */
    componentDidMount = () => {
      setInterval(this.updateTimer, 1000);
    }
  
    render = () => {
      return (
        <div>
          <h2>Seconds so Far:</h2>
          <p>{this.state.count}</p>
        </div>
      );
    }
}

export default Timer;