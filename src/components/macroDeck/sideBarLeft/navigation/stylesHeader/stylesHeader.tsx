import React from "react";
import { useStyles } from "../../../../../hooks";
import * as Styled from "./stylesHeader.styles";
import MacroDeckIcon from "../../../../../utils/icons/macroDeckIcons";

const StylesHeader: React.FC = () => {
  const { styleCount } = useStyles();
  return (
    <Styled.StylesHeader>
      <div>
        <MacroDeckIcon icon="Grid" size={14} />
      </div>
      <div>Available Styles</div>
      <div>{styleCount()}</div>
    </Styled.StylesHeader>
  );
};

export default StylesHeader;
