import React from "react";
import * as Styled from "./sectionFormWrapper.style";
import ButtonPadForm from "../Forms/buttonPadForm/buttonPadForm";
import ActionForm from "../Forms/actionForm/actionForm";
import { SectionMenus } from "../../../../types/sectionMenuTypes";

interface IntSectionWrapper {
  activeMenu: SectionMenus | null;
}

const SectionWrapper: React.FC<IntSectionWrapper> = ({ activeMenu }) => {
  return (
    <Styled.SectionWrapper>
      {/* {activeMenu === SectionMenus.ButtonPad && <ButtonPadForm />} */}
      {activeMenu === SectionMenus.Action && <ActionForm />}
    </Styled.SectionWrapper>
  );
};

export default SectionWrapper;
