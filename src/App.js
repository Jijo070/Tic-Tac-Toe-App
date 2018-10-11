import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import Status from'./components/Status';

class App extends Component {

  constructor(props){

    super(props)

    this.state = {

      board : Array(9).fill(null),
      player : null,
      winner : null,
      /* array to store the ndex */
      order_ndex : Array()
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
    for (let index = 0; index < winLines.length; index++) {
      const [a,b,c]=winLines[index];
      let board = this.state.board;
      if(board[a] && board[a] === board[b] && board[a] === board[c] ){
        alert('You won!');
        this.setState({
          winner : this.state.player
        })
      }
      else if(!this.state.winner && !board.includes(null) && board[a] === board[b] && board[a] === board[c]){
        alert('You won!');
        this.setState({
          winner : this.state.player
        })
      }
      else if(!this.state.winner && !board.includes(null) && board[a] !== board[b] && board[a] !== board[c]){
        alert('Its a Draw!');
        break;
      }
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

  setPlayer(player){
    this.setState({player})

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
      winner : null

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

        <Status
          gamemode ={this.state.gamemode} 
          player={this.state.player} 
          setPlayer={(e) => this.setPlayer(e)}
          winner = {this.state.winner}
        />

        <div className="board">
          
          {this.renderBoxes()}

        </div>
        <div className="btn">
          <button className='reset' onClick = {() => this.reset()}> Reset </button>
          <div class="divider"/>
          <button className='reset' onClick = {() => this.undo()}> Undo </button>
        </div>

      </div>

    );
  }
}

App.propTypes = {
  undoRedo: PropTypes.object.isRequired, 
  val: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default App;
