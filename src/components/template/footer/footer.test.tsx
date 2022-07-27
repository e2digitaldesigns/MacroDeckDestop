import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateFooter } from "./footer";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateFooter />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template Footer/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
