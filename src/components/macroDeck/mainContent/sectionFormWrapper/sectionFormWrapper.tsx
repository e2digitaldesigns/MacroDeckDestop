import React from "react";
import * as Styled from "./sectionFormWrapper.style";
import ActionForm from "../Forms/actionForm/actionForm";
import { SectionMenus } from "../../../../types/sectionMenuTypes";
import BtmButtonPadForm from "../Forms/buttonPadFormBottom/btmButtonPadForm";
import ActionList from "../ButtonPadEditor/ActionManager/ActionList/actionList";
import IconSelector from "../Forms/iconSelector/iconSelector";
import { useAppData } from "../../../../hooks";

interface IntSectionWrapper {
  activeMenu: SectionMenus | null;
}

const SectionWrapper: React.FC<IntSectionWrapper> = ({ activeMenu }) => {
  const { appState, setAppState } = useAppData();
  const [newIcon, setNewIcon] = React.useState<string>("");

  return (
    <Styled.SectionWrapperGrid
      showIconSelector={appState.iconSelector.isVisible}
    >
      {/* {activeMenu === SectionMenus.ButtonPad && <ButtonPadForm />}
      {activeMenu === SectionMenus.Action && <ActionForm />} */}

      <BtmButtonPadForm newIcon={newIcon} />

      {appState.iconSelector.isVisible ? (
        <>
          <IconSelector setNewIcon={setNewIcon} />
        </>
      ) : (
        <>
          <ActionList />
          <ActionForm />
        </>
      )}
    </Styled.SectionWrapperGrid>
  );
};

export default SectionWrapper;
