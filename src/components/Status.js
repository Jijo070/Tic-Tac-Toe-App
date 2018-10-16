import React, { Component } from 'react';

import Player from'./choosePlayer';

class Status extends Component {

	handleSetPlayer(e){
		if (this.props.gamemode) {
			this.props.setPlayer(e)
		}
	}

	renderHtml(){
		if (this.props.winner){
			return (<h5>Winner is {this.props.winner}</h5>)
		} else {
			return this.props.player ? 
	      	<h5>Next player is {this.props.player}</h5> : 
	      	<Player player={(e) => this.handleSetPlayer(e)} />
		}
	}

	render(){

		return (<span>{this.renderHtml()}</span>)
	}
}

export default Status;