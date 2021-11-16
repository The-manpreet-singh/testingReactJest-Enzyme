import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders the tests", () => {
  const wrapper = shallow(<App />);
  // throw new Error;
  //console.log(wrapper.debug()); // this is very helpful debugging
  expect(wrapper).toBeTruthy(); // mearns(true) wrapper would not be null, empty, and undefined.
  //expect(wrapper).toBeFalsy(); // mearns(false) wrapper would be null, empty, and undefined.
});
