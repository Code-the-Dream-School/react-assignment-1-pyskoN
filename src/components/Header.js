import React, { Component } from "react";
import logo from "../images/logo.png";
import Info from "../components/Info";

class Header extends Component {
  state = {
    isInfoComponent: false,
  };

  showInfoFunc = (e) => {
    e.target.style.display = "none";
    this.setState({ isInfoComponent: true });
  };

  render() {
    return (
      <>
        <img src={logo} alt="Tic Tac Toe" className="logo center" />
        <h2 className="niceFont">TIC TAC TOE</h2>
        <button
          type="button"
          className="btn btn-dark niceFont"
          onClick={this.showInfoFunc}
        >
          Press to Start
        </button>
        {this.state.isInfoComponent && <Info />}
      </>
    );
  }
}

export default Header;
