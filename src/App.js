import React, { Component } from 'react';

import './App.css';

import Status from'./components/Status';
import GameStatus from'./components/GameStatus';

const connery = require("./images/connery.svg");
const square = require("./images/square.svg");

class App extends Component {


  constructor(props){

    super(props)

    this.state = {

      board : Array(9).fill(null),
      player : null,
      winner : null,
      gamemode : null,
      /* array to store the ndex */
      order_ndex : []
    }

  }

  //Winning conditions
  checkWinner(){

    let winLines =
      [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"], 
        ["0", "4", "8"],
        ["2", "4", "6"]
      ]

    this.checkmatch(winLines)
  }

  //Checks if the current state matches the winning condition
  checkmatch(winLines){
    let board = this.state.board;
    for (let index = 0; index < winLines.length; index++) {
      const [a,b,c]=winLines[index];
      if(board[a] && board[a] === board[b] && board[a] === board[c] ){
        this.setState({
          winner : this.state.player
        })
        this.state.winner = this.state.player;
      }
    }
    if(!this.state.winner && !board.includes(null)){
      this.setState({
          winner : "None"
      })
    }
  }

  handleClick(index){

    if(this.state.player && !this.state.winner){

      let newBoard = this.state.board

      if(this.state.board[index]===null){

        newBoard[index] = this.state.player
        /* push the last index into the array */
        this.state.order_ndex.push(index) 
        this.setState({
          board: newBoard,
          player: this.state.player==="X" ? "O" : "X"
        })

        this.checkWinner()

      }
    }
  } 

  //Set the current state of Player
  setPlayer(player){
    this.setState({player})

  }

  //Set the current state of the Game mode
  setGameMode(gamemode){
    console.log(gamemode)
    this.setState({gamemode})

  }

  //Renders the boxes into DOM
  renderBoxes(){
    const isFrontend = this.state.gamemode === "Frontenddevlandia";
    return this.state.board.map(
      (box, index) => (
      <div 
        className="box" 
        key={index} 
        onClick={() => {
          this.handleClick(index);
        }}
      >
        {box === "X" && isFrontend && <img src={connery} />}
        {box === "O" && isFrontend && <img src={square} />}
        {!isFrontend && box}
      </div>
    ));
  }

  reset(){
    this.setState({
      board : Array(9).fill(null),
      player :  null,
      winner : null,
      setGameMode : null,
      order_ndex : []
    })

  } 

  undo() {
    let ndex = this.state.order_ndex.pop() 
    let newBoard = this.state.board
    let prev = newBoard[ndex]
    newBoard[ndex] = null
    this.setState({
      board: newBoard,
      player: prev
    })
  }


  render() {

    return (
      
      <div className="container">
        <h1>Tic Tac Toe App</h1>

        <GameStatus 
          gamemode ={this.state.gamemode} 
          setGameMode = {(e)=> this.setGameMode(e)}
        />

        <Status
          player={this.state.player} 
          setPlayer={(e) => this.setPlayer(e)}
          gamemode ={this.state.gamemode} 
          winner = {this.state.winner}
        />

        <div className="board">
          
          {this.renderBoxes()}

        </div>
        <div className="btn">
          <button className='reset' onClick = {() => this.reset()}> 
            {" "}
            Reset{" "} 
          </button>
          <div className="divider"/>
          <button 
            className='reset' 
            disabled ={this.state.winner} 
            onClick = {() => this.undo()}
          > 
            {" "}
            Undo{" "} 
          </button>
        </div>
      </div>
    );
  }
}

export default App;
