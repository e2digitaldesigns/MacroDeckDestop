import React, { createContext, ReactNode } from "react";

import { IntTemplateContext, IntTemplateData } from "../../types";

const templateDefaultState: IntTemplateContext = {
  hello: "bye"
};

const TemplateContext = createContext<IntTemplateData>({
  templateState: templateDefaultState,
  setTemplateState: (): void => {}
});

interface IntTemplateContextProvider {
  children: ReactNode;
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
