import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavigationItem from "./navigationItem";

import { ApplicationContext } from "../../../../context/context";
import { IntProfile } from "../../../../types";

const mockData: IntProfile = { _id: "01", profileName: "Local", buttonPads: 6 };

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <NavigationItem profile={mockData} />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Left Navigation Item/>", () => {
  const wrapper = testSetup();
  xit("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
