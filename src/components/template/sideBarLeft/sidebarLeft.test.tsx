import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateSidebarLeft } from "./sideBarLeft";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateSidebarLeft />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template Sidebar Left/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
