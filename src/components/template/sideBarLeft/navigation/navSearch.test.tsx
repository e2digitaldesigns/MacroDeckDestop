import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavSearch from "./navSearch";

import { AppContext } from "../../../../context/context";

const testSetup = () => {
  return render(
    <AppContext.ThemeProvider>
      <NavSearch />
    </AppContext.ThemeProvider>
  );
};

describe("<Left Navigation Search/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
