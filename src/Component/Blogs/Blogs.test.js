import React from "react";
import { shallow } from "enzyme";
import Blogs from "./Blogs";

describe("Blogs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Blogs />);
    expect(wrapper).toMatchSnapshot();
  });
});
