import React, { Component } from "react";
import "./title.css";
class Title extends Component {
  state = {
    title: "This is Dummy Title",
    isImput: false
  };

  editHandler = () => {
    this.setState({
      ...this.state,
      isImput: true
    });
  };
  onChangeHandler = e => {
    this.setState({
      ...this.state,
      title: e.target.value
    });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({
        ...this.state,
        isImput: false
      });
    }
  };
    onBlurHandler = e => {
    this.setState({
      ...this.state,
      isImput: false
    });
  };

  render() {
    let output = null;
    if (this.state.isImput) {
      output = (
        <div className="Title mb-3">
              <input
                  onChange={e => this.onChangeHandler(e)}
                  onKeyPress={e => this.onKeyPress(e)}
                  onBlur={e => this.onBlurHandler(e)}
                  className="form-control"
                  type="text"
                  value={this.state.title}
              />
        </div>
      );
    } else {
      output = (
        <div className="d-flex Title">
          <h1 className="display-4">{this.state.title}</h1>
          <span
            onClick={() => this.editHandler()}
            className="ml-auto edit-icon"
          >
            <i className="fas fa-pencil-alt" />
          </span>
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default Title;
