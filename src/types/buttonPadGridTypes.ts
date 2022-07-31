import { IntActions } from "../types";

export interface IntButtonPadGridCopyState {
  buttonPad: {
    bgColor: string;
    icon: string;
    iconColor: string;
    text: string;
    textColor: string;
  };
  actions: IntActions[];
}

export type ButtonPadGridCopyStateType = IntButtonPadGridCopyState | undefined;
