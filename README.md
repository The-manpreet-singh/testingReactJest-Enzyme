## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm install ajv`

its use for update the dependecies (old to newer versions).
it is not a dev dependencies.

### `npm install --save-dev jest enzyme jest-enzyme enzyme-adapter-react-16`

its use the dev dependecies insatll jest and enzyme and enzyme-adapter.

### enzyme setup-

import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders the test", () => {
const wrapper = shallow(<App />);
//throw new Error; // this is for the test fail
console.log(wrapper.debug()); // this is very helpful debugging
});

shallow function takes the jsx using the app and rendsering the app.
