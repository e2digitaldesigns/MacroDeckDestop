import React from "react";
import { Folder2 } from "react-bootstrap-icons";
//https://icons.getbootstrap.com/

import * as Styled from "./navigation.style";

interface IntNavigationItem {
  data: any;
}
const NavigationItem: React.FC<IntNavigationItem> = ({ data }) => {
  return (
    <Styled.NavigationItem>
      <div>
        <Folder2 size={16} />
      </div>
      <div>{data.name}</div>
      <div>{data.pads}</div>
    </Styled.NavigationItem>
  );
};

export default NavigationItem;
