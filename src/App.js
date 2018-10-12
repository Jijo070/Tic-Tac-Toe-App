import React, { Component } from 'react';

import './App.css';

import Status from'./components/Status';
import GameStatus from'./components/GameStatus';

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

  checkmatch(winLines){
    let board = this.state.board;
    for (let index = 0; index < winLines.length; index++) {
      const [a,b,c]=winLines[index];
      if(board[a] && board[a] === board[b] && board[a] === board[c] ){
        alert('You won!');
        this.setState({
          winner : this.state.player
        })
        this.state.winner = this.state.player;
      }
    }
    if(!this.state.winner && !board.includes(null)){
      this.state.winner = 'None';
      alert('Its a Draw!');
    }
  }

  handleClick(index){

    const images ={
      connery : require('./images/connery.svg'),
      square : require('./images/square.svg')
    }


    if(this.state.player && !this.state.winner && this.state.gamemode === "Classic"){

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

    else{

      let newBoard = this.state.board

      if(this.state.board[index]===null){

        newBoard[index] = this.state.player
        /* push the last index into the array */
        this.state.order_ndex.push(index) 
        this.setState({
          board: newBoard,
          player: this.state.player=== images.connery ? images.square : images.connery
        })

        this.checkWinner()

      }

    }
  } 

  setPlayer(player){
    this.setState({player})

  }

  setGameMode(gamemode){
    console.log(gamemode)
    this.setState({gamemode})

  }

  renderBoxes(){
    return this.state.board.map(
      (box, index) => 
      <div className="box" key={index} 
        onClick={()=> {this.handleClick(index)}}>
        {box}
      </div>
    )
  }

  reset(){

    this.setState({
      board : Array(9).fill(null),
      player :  null,
      winner : null,
      gamemode : null,
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
          winner = {this.state.winner}
        />

        <div className="board">
          
          {this.renderBoxes()}

        </div>
        <div className="btn">
          <button className='reset' onClick = {() => this.reset()}> Reset </button>
          <div className="divider"/>
          <button className='reset' disabled ={this.state.winner} onClick = {() => this.undo()}> Undo </button>
        </div>

      </div>

    );
  }
}

export default App;
