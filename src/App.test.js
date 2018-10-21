import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ChooseGameMode from './components/ChooseGameMode';
import Player from './components/choosePlayer';
import Status from './components/Status';
import App from './App';


configure({adapter: new Adapter()});
describe('<ChooseGameMode />',  () => {
	it('renders a form', () => {
	  const editor = shallow(<ChooseGameMode />);
	  expect(editor.find('form').length).toEqual(1);
	});
});

describe('<Player />',  () => {
	it('renders a form', () => {
	  const editor = shallow(<Player />);
	  expect(editor.find('form').length).toEqual(1);
	});
});

describe('<Status />',  () => {
	it('renders span', () => {
	  const editor = shallow(<Status />);
	  expect(editor.find('span').length).toEqual(1);
	});
});



