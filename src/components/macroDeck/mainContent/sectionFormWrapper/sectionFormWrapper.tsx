import React from "react";
import * as Styled from "./sectionFormWrapper.style";
import ActionForm from "../forms/actionForm/actionForm";
import BtmButtonPadForm from "../forms/buttonPadFormBottom/btmButtonPadForm";
import IconSelector from "../forms/iconSelector/iconSelector";
import { useAppData } from "../../../../hooks";
import ActionList from "../forms/actionList/actionList";

const SectionWrapper: React.FC = () => {
  const { appState } = useAppData();
  const [newIcon, setNewIcon] = React.useState<string>("");

  return (
    <Styled.SectionWrapperGrid
      showIconSelector={appState.iconSelector.isVisible}
    >
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
