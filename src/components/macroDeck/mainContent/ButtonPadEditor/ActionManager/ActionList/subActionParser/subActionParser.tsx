import React from "react";
import _size from "lodash/size";
import _split from "lodash/split";

import { usePage, useProfile } from "../../../../../../../hooks";
import { IntActions } from "../../../../../../../types";

export interface IntSubActionParser {
  action: IntActions;
}

const SubActionParser: React.FC<IntSubActionParser> = ({ action }) => {
  const { readProfile } = useProfile();
  const { readPage } = usePage();

  const parseAction = action?.subAction || action.action;
  let actionText: string | number | undefined = undefined;

  switch (parseAction) {
    case "api":
      actionText = action?.url || "";
      break;

    case "delay":
      actionText = `${action?.seconds || 0} seconds`;
      break;

    case "exe":
    case "sound":
      const pathArray = _split(action.path, "\\");
      actionText = pathArray[_size(pathArray) - 1] || "";
      break;

    case "keyTap":
      actionText = action?.text || "";
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
      actionText = "Settings";
      break;

    case "obsLayerHide":
    case "obsLayerShow":
    case "obsLayerToggle":
      actionText = `Layer: ${action.layer}`;
      break;

    case "obsRecordStart":
      actionText = "OBS Record Start";
      break;

    case "obsRecordStop":
      actionText = "OBS Record Stop";
      break;

    case "obsRecordToggle":
      actionText = "OBS Record Toggle";
      break;

    case "obsRecordPause":
      actionText = "OBS Record Pause";
      break;

    case "obsRecordResume":
      actionText = "OBS Record Resume";
      break;

    case "obsSceneChange":
      actionText = `Scene: ${action.scene}`;
      break;

    case "obsStreamStart":
      actionText = "OBS Stream Start";
      break;

    case "obsStreamStop":
      actionText = "OBS Stream Stop";
      break;

    case "obsStreamToggle":
      actionText = "OBS Stream Toggle";
      break;

    default:
      actionText = "";
  }

  return <div data-testid="sub-action-parser__text">{actionText}</div>;
};

export default SubActionParser;
