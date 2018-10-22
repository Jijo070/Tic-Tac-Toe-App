import ChooseGameMode from './components/ChooseGameMode';
import Player from './components/choosePlayer';
import Status from './components/Status';
import GameStatus from './components/GameStatus'; 
import App from './App';

// Testing for ChooseGameMode component
describe('<ChooseGameMode />',  () => {
	it('renders correctly using snapshot', () => {
	  const editor = render(
	  	<ChooseGameMode />
		);
	expect(editor).toMatchSnapshot();
	});

	it('renders a form', () => {
	  const editor = shallow(<ChooseGameMode />
		);	
	expect(editor.find('form').length).toEqual(1);
	});
});


// Testing for GameStatus component
describe('<GameStatus />',  () => {
	it('renders correctly using snapshot', () => {
	  const wrapper = shallow(
	  	<GameStatus gamemode={"Classic"} setGameMode={() => {}} />
		);
	expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly', () => {
	  const wrapper = render(
	  	<GameStatus gamemode={"Classic"} setGameMode={() => {}} />
		);
	expect(wrapper).toMatchSnapshot();
	});

	it('formats GameStatus correctly ', () => {
	  const wrapper = mount(
	  	<GameStatus gamemode={"Classic"} setGameMode={() => {}} />
		);

	const text = wrapper.find("h3").text();
	expect(text).toEqual("You are playing the Classic mode");
	});

	it('Calls setGameMode correctly on Click', () => {
		const spy =sinon.spy();
	  const wrapper = mount(
	  	<GameStatus gamemode={"Classic"} setGameMode={spy} />
		);
		wrapper.find("h3");
		expect(spy.calledOnce).toBe(false);
	});
});


// Testing for Player component
describe('<Player />',  () => {
	it('renders correctly using snapshot', () => {
	  const editor = render(
	  	<Player />
		);
	expect(editor).toMatchSnapshot();
	});

	it('renders a form', () => {
	  const editor = shallow(<Player />);
	  expect(editor.find('form').length).toEqual(1);
	});
});


// Testing for Status component
describe('<Status />',  () => {
	it('renders correctly using snapshot', () => {
	  const editor = render(
	  	<Status />
		);
	expect(editor).toMatchSnapshot();
	});

	it('renders span', () => {
	  const editor = shallow(<Status />);
	  expect(editor.find('span').length).toEqual(1);
	});

	it('formats Status correctly ', () => {
	  const wrapper = mount(
	  	<Status player={"x"} 
          setPlayer={() => {}}
          gamemode ={"Classic"} 
          winner = {"x"} />
		);

	const text = wrapper.find("h4").text();
	expect(text).toEqual("Game Over! Winner is x");
	});
});



