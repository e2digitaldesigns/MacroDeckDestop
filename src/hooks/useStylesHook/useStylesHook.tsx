import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _size from "lodash/size";
import { useGlobalData } from "..";

import {
  IntStyles,
  IntButtonPads,
  IntGlobalData,
  IntGlobalContextInterface
} from "../../types";
import { idGenerator } from "../../utils";

export interface IntUseStyleHook {
  createStyle: (buttonPadNum: string, pageId: string) => void;
  readStyles: () => IntStyles[];
  deleteStyle: (_id: string) => void;
  styleCount: () => number;
}

const useStylesHook = (): IntUseStyleHook => {
  const globalData: IntGlobalData = useGlobalData();

  const createStyle: IntUseStyleHook["createStyle"] = (
    buttonPadNum: string,
    pageId: string
  ): void => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPad = _find(
      state.buttonPads,
      (f: IntButtonPads) =>
        f.pageId === pageId && f.buttonPadNum === parseInt(buttonPadNum)
    );

    if (!buttonPad) return;

    const style = {
      textColor: buttonPad.textColor,
      icon: buttonPad.icon,
      iconColor: buttonPad.iconColor,
      image: buttonPad.image,
      bgColor: buttonPad.bgColor
    };

    const isFound = readStyles().some(element => {
      if (
        element.textColor === buttonPad.textColor &&
        element.icon === buttonPad.icon &&
        element.iconColor === buttonPad.iconColor &&
        element.image === buttonPad.image &&
        element.bgColor === buttonPad.bgColor
      ) {
        return true;
      }
      return false;
    });

    if (!isFound) {
      state.styles.push({ ...style, _id: idGenerator() });
      globalData.setState(state);
    }
  };

  const readStyles: IntUseStyleHook["readStyles"] = (): IntStyles[] => {
    const state = _cloneDeep(globalData.state);
    return state.styles;
  };

  const deleteStyle: IntUseStyleHook["deleteStyle"] = (_id: string): void => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    state.styles = _filter(state.styles, (f: IntStyles) => f._id !== _id);
    globalData.setState(state);
  };

  const styleCount = () => {
    return _size(readStyles());
  };

  return {
    createStyle,
    readStyles,
    deleteStyle,
    styleCount
  };
};

export default useStylesHook;
