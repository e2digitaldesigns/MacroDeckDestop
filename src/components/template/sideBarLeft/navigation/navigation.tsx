import React from "react";
import _map from "lodash/map";
import * as Styled from "./navigation.style";
import NavigationItem from "./navigationItem";
import NavigationSearch from "./navSearch";

const Navigation: React.FC = () => {
  const arr = [
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

  return (
    <>
      <NavigationSearch />
      <Styled.NavigationWrapper>
        {_map(arr, (data: any, index: number) => (
          <NavigationItem data={data} key={index} />
        ))}
      </Styled.NavigationWrapper>
    </>
  );
};

export default Navigation;
