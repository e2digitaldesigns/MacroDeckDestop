import React from "react";
import { useTemplate } from "../../../hooks";
import * as Styled from "./mainContent.style";

const MainContent: React.FC = () => {
  const { templateState } = useTemplate();

  return (
    <Styled.MainContent>
      <h3>Main</h3> <h4>{templateState.hello}</h4>{" "}
    </Styled.MainContent>
  );
};

export default MainContent;
