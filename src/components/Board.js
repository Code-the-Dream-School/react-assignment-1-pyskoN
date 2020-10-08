import React, { Component } from "react";
import zero from "../images/0.png";
import one from "../images/1.png";
import Cell from "../components/Cell";

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    showIcon: false,
    isNext: true,
    showBoard: true,
    status: "",
  };

  checkWinner(i) {
    const whoWins = calculateWinner(i);
    let status;
    if (whoWins === "O") {
      status = (
        <div className="status mb-3 alert-success center">
          <h1 className="niceFont mt-5">
            <strong>{"Winner: " + this.props.name2}</strong>
          </h1>
        </div>
      );
    } else if (whoWins === "X") {
      status = (
        <div className="status mb-3 alert-success center">
          <h1 className="niceFont mt-5">
            <strong>{"Winner: " + this.props.name1}</strong>
          </h1>
        </div>
      );
    } else {
      status = (
        <div className="status mb-3c center">
          <h3 className="niceFont">
            {"Your turn " +
              (this.state.isNext ? this.props.name2 : this.props.name1)}
          </h3>
        </div>
      );
    }
    if (whoWins) {
      this.setState({
        showBoard: false,
      });
    }
    this.setState({
      status: status,
    });
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isNext ? "X" : "O";

    this.setState({
      squares: squares,
      isNext: !this.state.isNext,
    });
    this.checkWinner(squares);
  }

  createSquare(i) {
    return (
      <Cell value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }

  handleNewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      showBoard: false,
      status: "",
    });
    this.props.gameOff();
  };

  render() {
    return (
      <>
        <div className="container">
          {this.state.status}
          {this.state.showBoard ? (
            <div className="row together">
              <div className="col-3 center">
                <img src={one} className="icon" />
                <h4 className="niceFont">{this.props.name1}</h4>
              </div>

              <div className="col-6 justify-center board">
                <div className="row">
                  {this.createSquare(0)}
                  {this.createSquare(1)}
                  {this.createSquare(2)}
                </div>
                <div className="row">
                  {this.createSquare(3)}
                  {this.createSquare(4)}
                  {this.createSquare(5)}
                </div>
                <div className="row">
                  {this.createSquare(6)}
                  {this.createSquare(7)}
                  {this.createSquare(8)}
                </div>
              </div>

              <div className="col-3 center">
                <img src={zero} className="icon" />
                <h4 className="niceFont">{this.props.name2}</h4>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="row together">
            <div className="col-4 center">
              <button
                type="button"
                className="btn btn-dark mt-2 niceFont"
                onClick={this.handleNewGame}
              >
                New Game
              </button>
            </div>
            {this.state.showBoard ? (
              <div className="col-4 center">
                <button
                  type="button"
                  className="btn btn-dark mt-2 niceFont"
                  onClick={() => {
                    this.setState({
                      squares: Array(9).fill(null),
                      isNext: true,
                    });
                  }}
                >
                  Reset
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
