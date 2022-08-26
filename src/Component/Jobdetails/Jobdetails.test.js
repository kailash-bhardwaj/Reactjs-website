import React from "react";
import { shallow } from "enzyme";
import Jobdetails from "./Jobdetails";

describe("Jobdetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Jobdetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
