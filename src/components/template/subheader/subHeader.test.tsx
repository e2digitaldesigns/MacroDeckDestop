import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateSubHeader } from "./subHeader";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateSubHeader />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template SubHeader/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
