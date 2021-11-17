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

we nedd to set data-test attribute inside a div for testing
for example-

`<div data-test="component-app" className="App">
<h1 data-test="counter-display">
The counter is currently&nbsp;
<span data-test="count">{count}</span>
</h1>
<button
data-test="increment-button"
onClick={() => setCount(count + 1)} >
Increment counter
</button>

 </div>`

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

### Types of tests

1- Unit tests- tests one piece (usually one function)

2- Integration tests- How multiple units work together

3- Acceptance/ End-to-End (E2E) tests- How a user would interact with the app

a--Unit Testing- In unit testing each module of the software is tested separately.
In integration testing all modules of the the software are tested combined.

b--In unit testing tester knows the internal design of the software. In integration testing doesn’t know the internal design of the software.

c--Unit testing is performed first of all testing processes.
Integration testing is performed after unit testing and before system testing.

d--Unit testing is a white box testing.
Integration testing is a black box testing.

e--Unit testing is basically performed by the developer.
Integration testing is performed by the tester.

f--Detection of defects in unit testing is easy.
Detection of defects in integration testing is difficult.

g--It tests parts of the project without waiting for others to be completed.
It tests only after the completion of all parts.

h--Unit testing is less costly.
Integration testing is more costly.
