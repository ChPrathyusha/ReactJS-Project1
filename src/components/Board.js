import React, { Component } from "react";
import SquareGrid from "./SquareGrid";



export default class Board extends Component {
  constructor(props) {
    super(props);
    let cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.state = {
      cells: cells,
      player: false,
      winner: 0,
      tie: false
    };
  }

  onClickHandler = (row, col) => {
    let board = this.state.cells;
    let temp = [];

    for (let i = 0; i < 6; i++) {
      temp.push(board[i].slice());
    }

    //check for tie
    let tie = this.checkForTie(board);

    if (tie) {
      console.log("tie");
      this.setState({
        tie: true
      });
    }
    //if winner stop user for adding coins
    if (this.state.winner) return;

    console.log("temp is" + temp);
    let emptyRow = this.rowWhereCoinBeAdded(col);
    console.log(emptyRow);
    temp[emptyRow][col] = this.state.player ? 1 : 2;
    this.setState(
      {
        cells: temp,
        player: !this.state.player
      },
      () => {
        if (this.checkWinner(emptyRow, col) > 0) {
          console.log("winner");
          this.setState({
            winner: this.state.player ? 2 : 1
          });
        }
      }
    );
  };
  rowWhereCoinBeAdded = col => {
    for (let i = 0; i < 6; i++) {
      if (this.state.cells[i][col] === 0) {
        return i;
      }
    }
    return -1;
  };
  //draw

  checkForTie = board => {
    for (let i = 0; i < board.length; i++) {
      for (let y = 0; y < board[i].length; y++) {
        if (board[i][y] === 0) {
          return false;
        }
      }
    }
    return true;
  };

  //restart

  restartGame = () => {
    var cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.setState({
      cells: cells,
      tie: false,
      player: false,
      winner: 0
    });
  };
  //check winner

  //horizontal win

  checkHorizontalWinner = (row, col) => {
    let cells = this.state.cells;

    let i = 6;

    let value = this.state.player ? 2 : 1;

    while (i >= 3) {
      if (
        cells[row][i] === value &&
        cells[row][i - 1] === value &&
        cells[row][i - 2] === value &&
        cells[row][i - 3] === value
      ) {
        return 1;
      }
      i--;
    }
    return 0;
  };

  checkVerticalWinner = (row, col) => {
    let cells = this.state.cells;
    //   let i = row;
    let value = this.state.player ? 2 : 1;

    if (row >= 3) {
      if (
        cells[row][col] === value &&
        cells[row - 1][col] === value &&
        cells[row - 2][col] === value &&
        cells[row - 3][col] === value
      ) {
        return 1;
      }
    }
    return 0;
  };
  //check winner
  checkWinner = (row, col) => {
    return (
      this.checkHorizontalWinner(row, col) ||
      this.checkVerticalWinner(row, col) ||
      this.checkDiagonal(row, col)
    );
  };

  checkDiagonal(row, col) {
    //find right and left tops
    var cells = this.state.cells;
    var value = this.state.player ? 2 : 1;
    var rR = row;
    var cR = col;
    while (rR < 5 && cR < 6) {
      rR++;
      cR++;
    }
    while (rR >= 3 && cR >= 3) {
      if (
        cells[rR][cR] === value &&
        cells[rR - 1][cR - 1] === value &&
        cells[rR - 2][cR - 2] === value &&
        cells[rR - 3][cR - 3] === value
      ) {
        return 1;
      }
      rR--;
      cR--;
    }

    var rL = row;
    var cL = col;

    while (rL < 5 && cL > 0) {
      rL++;
      cL--;
    }

    while (rL >= 3 && cL <= 3) {
      if (
        cells[rL][cL] === value &&
        cells[rL - 1][cL + 1] === value &&
        cells[rL - 2][cL + 2] === value &&
        cells[rL - 3][cL + 3] === value
      ) {
        return 1;
      }
      rL--;
      cL++;
    }
    return 0;
  }

  render() {
    let status = "";
    if (this.state.winner > 0) {
      if (this.state.winner === 1) {
        status = <p> Player 1 wins</p>;
      } else {
        status = <p> Player 2 wins</p>;
      }
    } else if (this.state.player) {
      status = <p>2 Player</p>;
    } else if (!this.state.winner && this.state.tie) {
      status = <p>Its a Tie</p>;
    } else {
      status = <p> 1 Player</p>;
    }
    return (
      <div>
        
        <div id="boradclass">
          <h2>2 Player Game</h2>
            {/* <input type='text'  id= 'player1'  placeholder='Enter Player1 Name'/><br/> */}
            {/* <input type='text' onChange={this.setColor1} id= 'color1' value={this.state.color1} placeholder='Enter Player1 Color'/><br/>
            <input type='text' onChange={this.setPlayer2} id= 'player2' value={this.state.player2} placeholder='Enter Player2 Name'/>      
            <input type='text' onChange={this.setColor2} id= 'color2' value={this.state.color2} placeholder='Enter Player2 Color'/><br/>
         */}
          <p className="status">{status}</p><br/>

          

          <div id="SquareGrid">
          <SquareGrid
            cells={this.state.cells}
            onClickHandler={this.onClickHandler}
          />

          <button className="btn-restart" onClick={() => this.restartGame()}>
            Play Again
          </button>

          </div>
        </div>
      </div>
    );
  }
}