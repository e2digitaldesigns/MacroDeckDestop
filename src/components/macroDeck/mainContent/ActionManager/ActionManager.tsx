import React from "react";
import ActionForm from "./ActionForm/actionForm";
import ActionList from "./ActionList/actionList";

import * as Styled from "./ActionManager.styles";

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
