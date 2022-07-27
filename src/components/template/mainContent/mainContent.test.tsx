import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateMainContent } from "./mainContent";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateMainContent />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template Main Content/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
