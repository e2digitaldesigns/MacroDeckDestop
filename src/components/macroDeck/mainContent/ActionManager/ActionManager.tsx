import React from "react";
import ActionForm from "./actionForm/actionForm";
import ActionList from "./actionList/actionList";

import * as Styled from "./actionManager.styles";

const ActionManager: React.FC = () => {
  return (
    <Styled.ActionManagerWrapper>
      <div>
        <ActionList />
      </div>
      <div>{/* <ActionForm /> */}</div>
    </Styled.ActionManagerWrapper>
  );
};

export default ActionManager;
