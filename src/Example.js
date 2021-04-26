// import react from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
// import Connectfour from "./Connectfour";
import Board from "./components/Board";

const Home=()=>{
    return (
    <div>
      <div class="home">
     
      {/* <h2>Intructions:</h2> */}
      <div id="description">
      <ul>
        
        <h2>Description</h2>
        {/* <img src={connect4} class="img"/> */}

        <li>This game is played on a vertical board wich has 7 hollow columns and 6 rows.</li>
        <li>Each column has a hole in the upper part of the board, where pieces are introduced.</li> 
        <li>There is a window for every square, so that pieces can be seen from both sides.</li>
        <li>In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.</li> 
        <li>Both players have a set of 21 thin pieces (like coins); each of them uses a different colour.</li>
        <li>The board is empty at the start of the game.</li>

        <img src="connect4.png"></img>
      
       
      
      <h2>Objective</h2>
      <ul>
          <li>
          <p>The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.</p>
            
          </li>
      </ul>
      
      <h2>How the game goes on</h2>
      <ul>
      <li>Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.</li>
      <li>Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column.</li>
      <li>So, in every turn the introduced piece may be placed at most on seven different squares.</li>
      <li>The winner is the first player who gets a straight line made with four own pieces and no gaps between them.</li>
      </ul>
      </ul>
      </div>
    </div>

    </div>
    );
    
};

const Game=()=>{
    // constructor(props){
    //     super(props);
    //     this.state = {player1:"" , player2:"" , color1:"", color2: "", result:""}

    // }
    return (
    <div>
        <div id="boardcalled">
            <Board />
        </div>
        
    </div>
    );
    
};
function SimpleExample(){
    return (
    <Router>
        <div id="buttons">
            <h1>Connect 4 Game</h1>
            <nav>
                   
                <h1><Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/Game">Game</Link></h1>
                 
            </nav>
            <hr/>
            <Route path="/" exact component={Home}/>
            <Route path="/Game" component={Game}/>
        </div>
        
   
    </Router>

        )
    }
    export default SimpleExample



// import React from "react";
// import {BrowserRouter as Router, Switch,Route, Link,  useParams} from "react-router-dom";
// import Board from "./components/Board";
// export default function App() {
//   return (
//     <Router>
// 		<div>
// 			<h1>Welcome to Routing</h1>
// 			<Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
// 			<Link to="/about">About</Link> &nbsp;&nbsp;&nbsp;
// 			<hr/>
// 		</div>
		
// 		<Switch>
// 		  <Route exact path="/">
// 			<Home />
// 		  </Route>
// 		  <Route path="/about">
// 			<About />
// 		  </Route>
	

	
		  
// 		</Switch>
// 	</Router>
//   );
// }



// // <Router>
// //       <div>
// //         <ul>
// //           <li>
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li>
// //             <Link to="/about">About</Link>
// //           </li>
 
// //         </ul>

// //         <hr />

// //         <Switch>
// //           <Route exact path="/">
// //             <Home />
// //           </Route>
// //           <Route path="/about">
// //             <About />
// //           </Route>
      
// //         </Switch>
// //       </div>
// //     </Router>

	
	
	
// // You can think of these components as "pages"
// // in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home Page is Loaded</h2>


//       <div class="home">
//       <h2>Home</h2>
//       <h2>Intructions:</h2>
//       <ul>
//         <h3>Description</h3>
//         {/* <img src={connect4} class="img"/> */}

//         <li>This game is played on a vertical board wich has seven hollow columns and six rows.</li>
//         <li>Each column has a hole in the upper part of the board, where pieces are introduced.</li> 
//         <li>There is a window for every square, so that pieces can be seen from both sides.</li>
//         <li>In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.</li> 
//         <li>Both players have a set of 21 thin pieces (like coins); each of them uses a different colour.</li>
//         <li>The board is empty at the start of the game.</li>
//       </ul>
//       <h2>Objective</h2>
//       <p>The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.</p>
//       <h2>How the game goes on</h2>
//       <ul>
//       <li>Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.</li>
//       <li>Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column.</li>
//       <li>So, in every turn the introduced piece may be placed at most on seven different squares.</li>
//       <li>The winner is the first player who gets a straight line made with four own pieces and no gaps between them.</li>
//       </ul>
//     </div>

//     </div>
//   );
// }

// function About() {
		
//   return (
//     <div>
//       <h2>About</h2>
     
//       <Board />
//     </div>
//   );
// }
