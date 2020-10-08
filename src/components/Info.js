import React, { Component } from "react";
import zero from "../images/0.png";
import one from "../images/1.png";
import Board from "../components/Board";

class Info extends Component {
  state = {
    isNewGame: false,
    player1name: "Player1",
    player2name: "Player2",
    isNameInput: true,
    isButtonShown: true,
  };

  gameOn = () => {
    this.setState({
      isNewGame: true,
      isNameInput: false,
      isButtonShown: false,
    });
  };

  gameOff = () => {
    this.setState({
      isNewGame: false,
      isNameInput: true,
      isButtonShown: true,
      player1name: "Player1",
      player2name: "Player2",
    });
  };

  updateInputValue = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    return (
      <>
        {this.state.isNameInput && (
          <form className="row together">
            <div className="col-4">
              <label htmlFor="name1">
                <h4>Player 1 </h4>
              </label>
              <img src={one} className="icon pl-2" />
              <input
                type="text"
                id="name1"
                name="player1name"
                placeholder="Player 1"
                value={this.state.player1name}
                onChange={this.updateInputValue}
              />
            </div>
            <div className="col-4">
              <label htmlFor="name2">
                <h4>Player 2 </h4>
              </label>
              <img src={zero} className="icon pl-2" />
              <input
                type="text"
                id="name2"
                placeholder="Player 2"
                name="player2name"
                value={this.state.player2name}
                onChange={this.updateInputValue}
              />
            </div>
          </form>
        )}
        {this.state.isButtonShown && (
          <button
            type="button"
            className="btn btn-dark mt-2 niceFont"
            onClick={this.gameOn}
          >
            Start Game
          </button>
        )}
        {this.state.isNewGame && (
          <Board
            name1={this.state.player1name}
            name2={this.state.player2name}
            gameOff={this.gameOff}
          />
        )}
      </>
    );
  }
}

export default Info;
