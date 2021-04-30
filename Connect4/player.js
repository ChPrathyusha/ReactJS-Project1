import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>PLAYERS INFO</h2>
 
        <ol>
          <li>Player 1</li>
          <input type="text" placeholder="Enter Name"></input><br/><br/>
          <li>Player 2</li>
          <input type="text" placeholder="Enter Name"></input><br/><br/>
          <NavLink to="/game"><button> Start Game</button></NavLink>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;