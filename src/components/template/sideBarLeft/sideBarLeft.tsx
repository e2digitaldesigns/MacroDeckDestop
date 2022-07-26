import React from "react";
import Navigation from "./navigation/navigation";
import * as Styled from "./sideBarLeft.style";

export const TemplateSidebarLeft: React.FC = () => {
  return (
    <Styled.Sidebarleft>
      <Navigation />
    </Styled.Sidebarleft>
  );
};
