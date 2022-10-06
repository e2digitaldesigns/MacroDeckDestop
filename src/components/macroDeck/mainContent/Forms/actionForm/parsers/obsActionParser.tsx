import React, { useEffect, useState } from "react";
import _map from "lodash/map";
import { IntActions } from "../../../../../../types/globalContextType";
import {
  IntObsScene,
  IntObsSource,
  objectProps
} from "../../../../../../types";
import { useObs } from "../../../../../../hooks";
import * as Styled from "../../../../mainContent/Forms/actionForm/actionForm.styles";
// import { SelectField } from "../../../../../../../theme";

export interface ObsActionParserProps {
  state: IntActions;
  onChange: any;
}

interface IntObsStateProps {
  scenes: IntObsScene[];
  sources: IntObsSource[];
}

const subActionMap: objectProps = {
  obsLayer: "layer",
  obsScene: "scene"
};

const ObsActionParser: React.FC<ObsActionParserProps> = ({
  state,
  onChange
}) => {
  const [obsState, setObsState] = useState<IntObsStateProps>({
    scenes: [],
    sources: []
  });
  const { getScenes, getSources } = useObs();
  const subActionSubStr = state?.subAction && state.subAction.substring(0, 8);
  const subAction = subActionSubStr && subActionMap?.[subActionSubStr];

  useEffect(() => {
    const fetchObs = async () => {
      const scenes = await getScenes();
      const sources = await getSources();
      setObsState(obsState => ({ ...obsState, scenes, sources }));
    };

    fetchObs();
    // eslint-disable-next-line
  }, []);

  const handleSelect = (e: any) => {
    onChange(e);
  };

  if (subAction) {
    return (
      <Styled.SelectField
        name={subAction}
        value={state?.[subAction as keyof IntActions]}
        onChange={e => handleSelect(e)}
      >
        {!state?.[subAction as keyof IntActions] && (
          <option value="">Choose {subAction}</option>
        )}
        <option>{subAction}s</option>

        {subAction === "scene" ? (
          <>
            {_map(obsState?.scenes, (scene: IntObsScene, i) => (
              <option key={scene.name} value={scene.name}>
                {scene.name} eee
              </option>
            ))}
          </>
        ) : (
          <>
            {_map(obsState?.sources, (source: IntObsSource, index: number) => (
              <option key={index} value={String(JSON.stringify(source))}>
                {source.scene + " > " + source.sourceName} xxx
              </option>
            ))}
          </>
        )}
      </Styled.SelectField>
    );
  }

  return <div />;
};

export default ObsActionParser;
