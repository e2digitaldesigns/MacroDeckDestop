import React from "react";

import { IntTemplateContext, IntTemplateData } from "../../types";

const templateDefaultState: IntTemplateContext = {
  hello: "bye"
};

const TemplateContext = React.createContext<IntTemplateData>({
  templateState: templateDefaultState,
  setTemplateState: (templateState): void => {}
});

interface IntTemplateContextProvider {
  children: React.ReactNode;
}

const TemplateContextProvider: React.FC<IntTemplateContextProvider> = ({
  children
}) => {
  const [templateState, setTemplateState] = React.useState<IntTemplateContext>({
    ...templateDefaultState
  });

  const templateContextValue = React.useMemo(
    () => ({ templateState, setTemplateState }),
    [templateState, setTemplateState]
  );

  return templateContextValue ? (
    <>
      <TemplateContext.Provider value={templateContextValue}>
        {children}
      </TemplateContext.Provider>
    </>
  ) : null;
};

export { TemplateContext, TemplateContextProvider };
