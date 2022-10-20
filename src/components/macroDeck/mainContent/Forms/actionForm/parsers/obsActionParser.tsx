import React from "react";
import _filter from "lodash/filter";
import _map from "lodash/map";
import { IntActions } from "../../../../../../types/globalContextType";
import {
  IntObsScene,
  IntObsSource,
  objectProps
} from "../../../../../../types";
import { useObs } from "../../../../../../hooks";
import * as Styled from "../actionForm.styles";

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
  const [obsState, setObsState] = React.useState<IntObsStateProps>({
    scenes: [],
    sources: []
  });

  const [filterScene, setFilterScene] = React.useState<string>("");
  const { getScenes, getSources } = useObs();
  const subActionSubStr = state?.subAction && state.subAction.substring(0, 8);
  const subAction = subActionSubStr && subActionMap?.[subActionSubStr];

  React.useEffect(() => {
    const fetchObs = async () => {
      const scenes = await getScenes();
      const sources = await getSources();
      setObsState(obsState => ({ ...obsState, scenes, sources }));
    };

    fetchObs();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (state?.[subAction as keyof IntActions] && subAction === "layer") {
      const data = JSON.parse(state[subAction as keyof IntActions] as string);
      data?.parentScene && setFilterScene(data.parentScene);
    }
  }, [state, subAction]);

  const handleSelect = (e: any) => {
    onChange(e);
  };

  const filterByScene = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilterScene(e.target.value);
  };

  const filtered = _filter(
    obsState.sources,
    (f: any) => f.parentScene === filterScene
  );

  const parseOptionText = (source: any) => {
    return source.scene !== filterScene
      ? source.scene + " > " + source.sourceName
      : source.sourceName;
  };

  const label = subAction === "layer" ? "Layer" : "Scene";

  if (subAction) {
    return (
      <>
        {subAction === "layer" && (
          <Styled.FieldSet>
            <Styled.Label>Scene:</Styled.Label>
            <Styled.SelectField onChange={filterByScene} value={filterScene}>
              {!filterScene && <option>Choose Scene</option>}
              {_map(obsState?.scenes, (scene: IntObsScene, i) => (
                <option key={scene.name} value={scene.name}>
                  {scene.name}
                </option>
              ))}
            </Styled.SelectField>
          </Styled.FieldSet>
        )}

        <Styled.FieldSet>
          <Styled.Label>{label}:</Styled.Label>
          <Styled.SelectField
            name={subAction}
            value={state?.[subAction as keyof IntActions]}
            onChange={e => handleSelect(e)}
          >
            {!state?.[subAction as keyof IntActions] && (
              <option value="">Choose {subAction}</option>
            )}

            {subAction === "scene" && (
              <>
                {_map(obsState?.scenes, (scene: IntObsScene, i) => (
                  <option key={scene.name} value={scene.name}>
                    {scene.name}
                  </option>
                ))}
              </>
            )}

            {subAction === "layer" && (
              <>
                {_map(filtered, (source: IntObsSource, index: number) => (
                  <option key={index} value={String(JSON.stringify(source))}>
                    {parseOptionText(source)}
                  </option>
                ))}
              </>
            )}
          </Styled.SelectField>
        </Styled.FieldSet>
      </>
    );
  }

  return <div />;
};

export default ObsActionParser;
