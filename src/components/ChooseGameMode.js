import React, { Component } from 'react';

class ChooseGameMode extends Component{

	handleForm(e){
		this.props.setGamemode(e.target.value);
	}

	render(){
		return (
			<form onChange={this.handleForm.bind(this)}>
				<label>
					Classic
					<input type="radio" name="gamemode" value="Classic" />
				</label>

				<label>
					Frontenddevlandia
					<input type="radio" name="gamemode" value="Frontenddevlandia" />
				</label>

			</form>
		);

	}
}

export default ChooseGameMode;