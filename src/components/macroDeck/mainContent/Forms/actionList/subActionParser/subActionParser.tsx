import React from "react";
import _size from "lodash/size";
import _split from "lodash/split";

import * as Styled from "./subActionParser.styles";
import { usePage, useProfile } from "../../../../../../hooks";
import { IntActions } from "../../../../../../types";

export interface IntSubActionParser {
  action: IntActions;
  showIcon?: boolean;
}

const SubActionParser: React.FC<IntSubActionParser> = ({ action }) => {
  const { readProfile } = useProfile();
  const { readPage } = usePage();

  const parseAction = action?.subAction || action.action;
  let theAction = "MD";
  let actionText: string | number | undefined = undefined;

  const layerParser = (action: IntActions) => {
    const act = action.subAction.split("obsLayer")[1];
    const sourceName = JSON.parse(action.layer)?.sourceName;
    return sourceName ? `${act} Layer: ${sourceName}` : "";
  };

  const getFilePath = (action: IntActions) => {
    const pathArray1 = _split(action.path, "\\");
    return pathArray1[_size(pathArray1) - 1] || "";
  };

  switch (parseAction) {
    case "api":
      theAction = "API";
      actionText = action?.url || "";
      break;

    case "delay":
      theAction = "DLY";
      actionText = `delay ${action?.seconds / 1000 || 0} seconds`;
      break;

    case "exe":
      theAction = "EXE";
      actionText = getFilePath(action);
      break;

    case "sound":
      theAction = "SND";
      actionText = getFilePath(action);
      break;

    case "keyTap":
      theAction = "KEY";
      actionText = action?.text ? `Key Press ${action.text}` : "";
      break;

    case "mdHome":
      actionText = "Home";
      break;

    case "mdPage":
      actionText = action?.page
        ? `Go to Page ${readPage(action.page)?.number}` || ""
        : "";
      break;

    case "mdProfile":
      const profile = readProfile();
      actionText = profile?.profileName ? `Go to ${profile.profileName}` : "";
      break;

    case "mdProfileSelector":
      actionText = "Profile Selection Page";
      break;

    case "mdReset":
      actionText = "Reset Mobile App";
      break;

    case "mdSettings":
      actionText = "Go to Settings";
      break;

    case "obsLayerHide":
    case "obsLayerShow":
    case "obsLayerToggle":
      theAction = "OBS";
      actionText = layerParser(action);
      break;

    case "obsRecordStart":
      actionText = "Record Start";
      break;

    case "obsRecordStop":
      theAction = "OBS";
      actionText = "Record Stop";
      break;

    case "obsRecordToggle":
      theAction = "OBS";
      actionText = "Record Toggle";
      break;

    case "obsRecordPause":
      theAction = "OBS";
      actionText = "Record Pause";
      break;

    case "obsRecordResume":
      theAction = "OBS";
      actionText = "Record Resume";
      break;

    case "obsSceneChange":
      theAction = "OBS";
      actionText = `Scene: ${action.scene}`;
      break;

    case "obsStreamStart":
      theAction = "OBS";
      actionText = "Stream Start";
      break;

    case "obsStreamStop":
      theAction = "OBS";
      actionText = "Stream Stop";
      break;

    case "obsStreamToggle":
      theAction = "OBS";
      actionText = "Stream Toggle";
      break;

    default:
      actionText = "";
  }

  // return <div data-testid="sub-action-parser__text">{actionText}</div>;

  return (
    <Styled.SubActionDiv data-testid="sub-action-parser__text">
      <div>{theAction}</div>
      <div>{actionText} </div>
    </Styled.SubActionDiv>
  );
};

export default SubActionParser;
