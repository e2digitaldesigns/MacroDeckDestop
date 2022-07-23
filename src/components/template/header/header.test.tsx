import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateHeader } from "./header";

import { AppContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <AppContext.ThemeProvider>
      <TemplateHeader />
    </AppContext.ThemeProvider>
  );
};

describe("<Template Header/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
