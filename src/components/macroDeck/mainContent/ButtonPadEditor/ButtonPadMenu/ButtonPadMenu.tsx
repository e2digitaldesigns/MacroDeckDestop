import React from "react";
import * as Styled from "./ButtonPadMenu.styles";

enum Menus {
  Actions = "actions",
  Icons = "icons"
}
const ButtonPadMenu: React.FC = () => {
  const [menu, setMenu] = React.useState<Menus>(Menus.Icons);

  return (
    <Styled.ButtonPadMenuWrapper>
      <Styled.ButtonPadMenuItems
        active={menu === Menus.Icons}
        onClick={() => setMenu(Menus.Icons)}
      >
        Icons
      </Styled.ButtonPadMenuItems>

      <Styled.ButtonPadMenuItems
        active={menu === Menus.Actions}
        onClick={() => setMenu(Menus.Actions)}
      >
        Actions
      </Styled.ButtonPadMenuItems>
    </Styled.ButtonPadMenuWrapper>
  );
};

export default ButtonPadMenu;
