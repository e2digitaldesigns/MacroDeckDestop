import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavigationItem from "./navigationItem";

import { AppContext } from "../../../../context/context";

const mockData = [
  { name: "Local", pads: 6 },
  { name: "Remote", pads: 12 },
  { name: "Issues", pads: 9 },
  { name: "Teams", pads: 15 },
  { name: "Tags", pads: 18 },
  { name: "Local", pads: 6 },
  { name: "Remote", pads: 12 },
  { name: "Issues", pads: 9 },
  { name: "Teams", pads: 15 },
  { name: "Tags", pads: 18 }
];

const testSetup = () => {
  return render(
    <AppContext.ThemeProvider>
      <NavigationItem data={mockData} />
    </AppContext.ThemeProvider>
  );
};

describe("<Left Navigation Item/>", () => {
  const wrapper = testSetup();
  it("Should render without errors", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
