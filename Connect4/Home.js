import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Instructions:</h2>
        <p><ol>
            <li>To win Connect Four, all you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally.</li>
            <li>Each player will drop in one checker piece at a time. This will give you a chance to either build your row, or stop your opponent from getting four in a row.</li>
            <li>The game is over either when you or your friend reaches four in a row, or when all forty two slots are filled, ending in a stalemate.</li>
            <li>If you and your friend decide to play again, the loser typically goes first.</li>
            <li>The bottom of the vertical game board has a switch that you slide to make the pieces drop out of the board. This is a great opportunity to put the box underneath the game board to collect all of checker pieces together.</li>
            </ol></p>
      </div>
    );
  }
}
 
export default Home;