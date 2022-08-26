import React from "react";
import { shallow } from "enzyme";
import Jobs from "./Jobs";

describe("Jobs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Jobs />);
    expect(wrapper).toMatchSnapshot();
  });
});
