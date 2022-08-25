import React from "react";

import { FormFieldFileTypes, IntActions } from "../../../../../types";

import {
  FormFieldFile,
  FormFieldKey,
  FormFieldNumbers,
  FormFieldSelect,
  FormFieldTextArea,
  FormFieldText
} from "./formFields";

interface IntActionparser {
  handleFilePathChange: (id: FormFieldFileTypes) => void;
  handleFormChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleKeyFieldChange: (text: string) => void;
  state: IntActions;
}

interface actionMapProps {
  [key: string]: any;
}

const ActionParser: React.FC<IntActionparser> = ({
  handleFilePathChange,
  handleFormChange,
  handleKeyFieldChange,
  state
}) => {
  const actionMap: actionMapProps = {
    api: (
      <FormFieldText
        data-testid="action-parser__api"
        name="url"
        onChange={handleFormChange}
        state={state}
      />
    ),

    delay: (
      <FormFieldNumbers
        data-testid="action-parser__delay"
        name="seconds"
        onChange={handleFormChange}
        seconds={true}
        state={state}
      />
    ),
    exe: (
      <FormFieldFile
        data-testid="action-parser__exe"
        id={FormFieldFileTypes.MDFileFieldExe}
        onChange={handleFilePathChange}
      />
    ),
    sound: (
      <FormFieldFile
        data-testid="action-parser__sound"
        id={FormFieldFileTypes.MDFileFieldSound}
        onChange={handleFilePathChange}
      />
    ),
    keyTap: (
      <FormFieldKey
        data-testid="action-parser__keyTap"
        name="text"
        onChange={handleKeyFieldChange}
        state={state}
      />
    ),

    md: (
      <FormFieldSelect
        data-testid="action-parser__md"
        name="md"
        onChange={handleFormChange}
        subAction={state.subAction}
      />
    ),
    obs: (
      <FormFieldSelect
        data-testid="action-parser__obs"
        name="obs"
        onChange={handleFormChange}
        subAction={state.subAction}
      />
    ),
    spotify: (
      <FormFieldSelect
        name="spotify"
        onChange={handleFormChange}
        subAction={state.subAction}
      />
    ),
    twitter: (
      <FormFieldTextArea
        name="twitter"
        onChange={handleFormChange}
        state={state}
      />
    )
  };

  return actionMap[state.action];
};

export default ActionParser;
