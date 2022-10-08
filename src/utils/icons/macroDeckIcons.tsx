import React from "react";
import * as RFIcon from "react-feather";
import _find from "lodash/find";
import _startsWith from "lodash/startsWith";
import * as Styed from "./macroDeckIcons.style";

export interface IntMacroDeckIcon {
  color?: string;
  icon: string;
  size?: number | string;
}

const MacroDeckIcon: React.FC<IntMacroDeckIcon> = ({
  icon,
  color = "white",
  size = 24
}): React.ReactElement => {
  const delimeter = "md-icon-alpha-";
  const defaultIcon = RFIcon.Home;
  const TheIcon = _find(RFIcon, (f: RFIcon.Icon) => f.displayName === icon);

  if (_startsWith(icon, delimeter)) {
    return (
      <Styed.MdIcon color={color} data-testid={`icon-${icon}`}>
        {icon.split(delimeter)[1]}
      </Styed.MdIcon>
    );
  }

  return (
    <>
      {icon === "NONE" || !TheIcon ? null : (
        <TheIcon
          data-testid={`icon-${TheIcon.displayName}`}
          color={color}
          size={size}
        />
      )}
    </>
  );
};

export default MacroDeckIcon;
