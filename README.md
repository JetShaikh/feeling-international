# Feeling International

## Core Technologies

This app is built using a number of core technologies:

- [Node](https://nodejs.org/en/), the JavaScript runtime which allows JavaScript to be run outside of a browser. To install, I recommend installing [NVM](https://github.com/creationix/nvm) and using it to install a recent even-numbered version of Node. (This app is built in 10.5.0, I believe, the 10 being the important even number).

  > All of the additional "packages" installed in this app that let the app run are Node packages, installed using NPM ("node package manager") or Yarn. The "manifest" that describes which packages the app uses ("dependencies") is in package.json.

- [React Native](https://facebook.github.io/react-native/) is a framework based on the web-dev framework React for building native apps using JavaScript. It makes it easy to build iOS/Android apps in parallel, without much difference in the code.

- [Expo](https://expo.io/) is a toolset built out to make building basic React Native apps easier. It makes it easier to deploy the app to your (or others') Android phones, and to access any basic phone functions. You'll want to install their command-line tool (more below) to launch the app.

- [Redux](https://redux.js.org/) is a state-management tool used primarily in React and React Native apps. It allows all the components/pages of an app to have access to the same data store, which in this case stores which languages we've chosen to translate to/from. This data store is updated by calling the reducer functions (in reducer.js), using specific actions designed to provoke specific changes to the data, which are automatically propagated in the frontend of the application.

## Getting started

- Clone this repo locally.
- `cd` into the repo using the command line
- Run `npm install -g yarn`.
- Run `yarn install` from within the main directory.
- Run `expo start`, once you've installed the Expo CLI.
- This will spin up the expo client in the web.
- Click the button to run on an iOS simulator. This may require some (long) XCode updates and the installation of a simulator, but eventually, the app should run in the simulator.
