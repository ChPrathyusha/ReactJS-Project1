import React, { Component } from "react";import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: 1,
      p2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      msg: ''
    };
    // Bind play function to App component
    this.play = this.play.bind(this);
  }
  // Starts new game
  initBoard() {
    // Create a blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    this.setState({
      board,
      currentPlayer: this.state.p1,
      gameOver: false,
      msg: ''
    });
  }
  togglePlayer() {
    return (this.state.currentPlayer === this.state.p1) ? this.state.p2 : this.state.p1;
  }
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }
      // Check status of board
      let result = this.checkAll(board);
      if (result === this.state.p1) {
        this.setState({ board, gameOver: true, msg: 'Player 1 (red) wins!' });
      } else if (result === this.state.p2) {
        this.setState({ board, gameOver: true, msg: 'Player 2 (yellow) wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, msg: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ msg: 'Game over. Please start a new game.' });
    }
  }
  vertical(board) {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];    
          }
        }
      }
    }
  }
  Horizantal(board) {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] && 
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
 DiagonalRight(board) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  DiagonalLeft(board) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  checkAll(board) {
    return this.vertical(board) || this.DiagonalRight(board) || this.DiagonalLeft(board) || this.Horizantal(board) || this.checkDraw(board);
  }
  componentWillMount() {
    this.initBoard();
  }
  render() {
    return (
      <div>
        <div className="button" onClick={() => {this.initBoard()}}>Restart</div>
        <p className="msg">{this.state.msg}</p>
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
      </div>
    );
  }
}
// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
};
const Cell = ({ value, columnIndex, play }) => {
  let color = 'white';
  if (value === 1) {
    color = 'red';
  } else if (value === 2) {
    color = 'yellow';
  }
  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};
//ReactDOM.render(<App />, document.getElementById('main'));
export default App;