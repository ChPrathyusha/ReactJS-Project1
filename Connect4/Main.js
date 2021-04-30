import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./player";
  import App from "./game";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>CONNECT FOUR</h1>
          <ul class="navlink">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/player">Player Info</NavLink></li>
       
          </ul>
          <div class="c">
          <Route exact path="/" component={Home}/>
            <Route path="/player" component={Stuff}/>
            <Route path="/game" component={App}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;