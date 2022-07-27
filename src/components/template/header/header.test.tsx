import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateHeader } from "./header";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateHeader />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template Header/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
