export interface IntTemplateContext {
  hello: string;
}

export interface IntTemplateContextState {
  templateState: IntTemplateContext;
  setTemplateState: React.Dispatch<React.SetStateAction<IntTemplateContext>>;
}

export type IntTemplateData = IntTemplateContextState;
