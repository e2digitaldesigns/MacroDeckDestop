import _includes from "lodash/includes";
import _startsWith from "lodash/startsWith";
import { IntActions } from "../../../../../types";

const subArray = [
  "mdPage",
  "mdProfile",
  "obsLayerHide",
  "obsLayerShow",
  "obsLayerToggle",
  "obsSceneChange"
];

const secondaryParser = (type: string, state: IntActions): boolean => {
  console.log(type, state.subAction);
  return (
    _startsWith(state?.action, type) && _includes(subArray, state?.subAction)
  );
};

export default secondaryParser;
