import React from "react";
import Navigation from "./navigation/navigation";
import * as Styled from "../../../styles/app.style";

export const MacroDeckSidebarLeft: React.FC = () => {
  return (
    <Styled.Sidebarleft>
      <Navigation />
    </Styled.Sidebarleft>
  );
};
