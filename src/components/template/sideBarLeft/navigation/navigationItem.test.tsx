import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavigationItem from "./navigationItem";

import { ApplicationContext } from "../../../../context/context";
import { IntProfile } from "../../../../types";

const mockData: IntProfile[] = [
  { _id: "01", profileName: "Local", buttonPads: 6 },
  { _id: "02", profileName: "Remote", buttonPads: 12 },
  { _id: "03", profileName: "Issues", buttonPads: 9 },
  { _id: "04", profileName: "Teams", buttonPads: 15 },
  { _id: "05", profileName: "Tags", buttonPads: 18 },
  { _id: "06", profileName: "Local", buttonPads: 6 },
  { _id: "07", profileName: "Remote", buttonPads: 12 },
  { _id: "08", profileName: "Issues", buttonPads: 9 },
  { _id: "09", profileName: "Teams", buttonPads: 15 },
  { _id: "10", profileName: "Tags", buttonPads: 18 }
];

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
