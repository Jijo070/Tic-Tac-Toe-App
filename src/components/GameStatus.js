import React, { Component } from 'react';

import ChooseGameMode from'./ChooseGameMode';


class GameStatus extends Component {

	handleSetGameMode(e){
		this.props.setGameMode(e)
	}

	render() {
    return (
      <div>
        {this.props.gamemode && (
          <h3>You are playing the {this.props.gamemode} mode</h3>
        )}
        <ChooseGameMode
          gamemode={this.props.gamemode}
          setGamemode={e => this.handleSetGameMode(e)}
        />
      </div>
    );
  }
}

export default GameStatus;