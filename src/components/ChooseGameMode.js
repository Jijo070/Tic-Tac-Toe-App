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
					Classic Mode
					<input type="radio" name="gamemode" value="H"/>
				</label>

				<label>
					Frontenddevlandia
					<input type="radio" name="gamemode" value="S"/>
				</label>

				<input type="submit" value="Submit" />
			</form>
		)

	}
}

export default ChooseGameMode;