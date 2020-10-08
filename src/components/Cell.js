import React, { Component } from "react";
import Board from "../components/Board";
import style from "react";

class Cell extends Component {
  render() {
    return (
      <button
        type="button"
        className="square cell niceFont"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Cell;
