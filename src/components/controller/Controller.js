import React, { Component } from "react";
class Controller extends Component {
  state = {
    start: true,
    pause: false,
    lep: false,
    reset: false
  };

  startHandler = () => {
    this.setState({
      ...this.state,
      pause: true,
      lep: true,
      start: false
    });

    this.props.start()
  };

  pauseHandler = () => {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lep: false,
      reset: true
    });

    this.props.pause()
  };

  lepHandler = () => {
      this.props.lap()
  };

  resetHandler = () => {
    this.setState({
        start: true,
        pause: false,
        lep: false,
        reset: false
    });
      this.props.reset()
  }

  getController() {
    let output = null;
    if (this.state.start && !this.state.reset) {
      output = (
        <div className="mt-5">
          <button
            onClick={e => this.startHandler(e)}
            className="btn btn-success btn-lg px-5 mx-5"
          >Start </button>
        </div>
      );
    } else if (this.state.pause && this.state.lep) {
      output = (
        <div className="mt-5">
          <button
            onClick={e => this.pauseHandler(e)}
                  className="btn btn-danger btn-lg px-5 mx-5"
          >Pause </button>
          <button
            onClick={e => this.lepHandler(e)}
                  className="btn btn-info btn-lg px-5"
          > lep </button>
        </div>
      );
    } else if (this.state.start && this.state.reset) {
      output = (
        <div className="mt-5">
          <button
            onClick={e => this.startHandler(e)}
                  className="btn btn-success btn-lg px-5 mx-5"
          >Start</button>
          <button
            onClick={e => this.resetHandler(e)}
                  className="btn btn-danger btn-lg px-5"
          > Reset </button>
        </div>
      );
    }
    return output;
  }

  render() {
    return this.getController();
  }
}

export default Controller;