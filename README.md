# Tic-Tac-Toe-App
### An Online Tic-tac-toe Application Using ReactJS

## Deployment Link:
The app has been deployed here: https://jijo070.github.io/Tic-Tac-Toe-App/

## To run the app locally in your machine:
1. Install [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).
2. Install [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
3. Download or clone this repo to your local machine.
4. Using terminal in Mac or command prompt in windows, go to the root folder of the app where the `package.json` file is located and type in the command `yarn install` or `npm install` to install all the dependencies for the app.
5. Type in the command `yarn start`or `npm start` in the terminal or command prompt to start the application using your local server.

## Steps and Working of the application:
1. Choose the game mode you want to play as.
2. Choose the Player you want to play as.
3. Click start.
4. Click on the boxes to display the respective pieces depending on the player and the game mode you choose.
5. Undo button available to undo a particular move, in between a game untill the game is over.
6. Reset button to reset the game at anytime during the play.
7. Hot swapping of pieces available at any given time throughout the game, depending the game mode selection.

## Milestones and functionalities achieved:
1. An undo button that removes the last move.
2. Production level code.
3. Used [bootstrap 4](https://getbootstrap.com/) for a Responsive Layout.
4. Added bonus section for the **Frontenddevlandia** mode.
5. Achieved hot swapping of the pieces at any given time throughout the game.
6. Added a Reset button to reset the game (not mentioned in the task).


## Libraries used for testing:
Used [Jest](https://jestjs.io/) that comes pre-configured with create-react-app for testing. Other libraries used include:
* [enzyme](https://airbnb.io/enzyme/): Made by AirBnb, specifically made to help test React components
* [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16): Needed to have enzyme work with your version of React
* [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json): Let's you customize how Jest serializes snapshots
* [sinon](https://sinonjs.org/): Spy functions, mocks, and stubs

