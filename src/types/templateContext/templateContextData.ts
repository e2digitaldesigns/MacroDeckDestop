export interface IntTemplateContext {
  hello: string;
}

export interface IntTemplateContextState {
  templateState: IntTemplateContext;
  setTemplateState: React.Dispatch<React.SetStateAction<any>>;
}

export type IntTemplateData = IntTemplateContextState;
