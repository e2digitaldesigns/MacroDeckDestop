import React from "react";
import * as Styled from "./footer.style";
import { useSettings } from "./../../../hooks";

export const TemplateFooter: React.FC = () => {
  const { getSettings } = useSettings();
  const { md } = getSettings();

  return (
    <Styled.Footer>
      <Styled.FooterTab>
        port:
        <span>{md?.port || "n/a"}</span>
      </Styled.FooterTab>

      <Styled.FooterTab>
        ip address:
        <span>{md?.ipAddress || "n/a"}</span>
      </Styled.FooterTab>
    </Styled.Footer>
  );
};
