import React from "react";
import { shallow } from "enzyme";
import Blogdetail from "./Blogdetail";

describe("Blogdetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Blogdetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
