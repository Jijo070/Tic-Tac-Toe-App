import React, { Component } from 'react';

class ChooseGameMode extends Component{

	handleForm(e){
		e.preventDefault();
		this.props.gamemode(e.target.gamemode.value);
	}

	render(){
		return (
			<form onSubmit={(e)=> this.handleForm(e)}>
				<label>
					Classic
					<input type="radio" name="gamemode" checked="checked" value="Classic"/>
				</label>

				<label>
					Frontenddevlandia
					<input type="radio" name="gamemode" value="Frontenddevlandia"/>
				</label>

				<input type="submit" value="Submit" />
			</form>
		)

	}
}

export default ChooseGameMode;