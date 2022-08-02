import React from "react";
import Navigation from "./navigation/navigation";
import * as Styled from "../../../styles/app.style";

export const TemplateSidebarLeft: React.FC = () => {
  return (
    <Styled.Sidebarleft>
      <Navigation />
    </Styled.Sidebarleft>
  );
};
