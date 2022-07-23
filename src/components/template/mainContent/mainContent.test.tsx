import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateMainContent } from "./mainContent";

import { AppContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <AppContext.ThemeProvider>
      <TemplateMainContent />
    </AppContext.ThemeProvider>
  );
};

describe("<Template Main Content/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
