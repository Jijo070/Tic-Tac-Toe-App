import React, { Component } from 'react';

import ChooseGameMode from'./ChooseGameMode';


class GameStatus extends Component {

	handleSetGameMode(e){
		this.props.setGameMode(e)
	}

	render(){

		return (this.props.gamemode ? 
              <h4>You are playing the {this.props.gamemode} mode</h4> : 
              <ChooseGameMode gamemode={(e) => this.handleSetGameMode(e)} />
        )
	}
}

export default GameStatus;