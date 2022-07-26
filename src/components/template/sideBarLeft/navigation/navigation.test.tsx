import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navigation from "./navigation";

import { AppContext } from "../../../../context/context";

const testSetup = () => {
  return render(
    <AppContext.ThemeProvider>
      <Navigation />
    </AppContext.ThemeProvider>
  );
};

describe("<Left Navigation/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
