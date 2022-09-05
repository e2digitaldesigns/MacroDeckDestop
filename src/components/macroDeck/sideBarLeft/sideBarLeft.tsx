import React from "react";
import Navigation from "./navigation/navigation";
import * as Styled from "./sideBarLeft.style";

export const MacroDeckSidebarLeft: React.FC = () => {
  return (
    <Styled.SidebarLeft>
      <Navigation />
    </Styled.SidebarLeft>
  );
};
