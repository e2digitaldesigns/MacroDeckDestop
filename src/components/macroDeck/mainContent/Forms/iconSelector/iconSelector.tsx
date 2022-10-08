import React from "react";
import * as Styled from "./iconSelector.styles";
import * as RFIcon from "react-feather";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _map from "lodash/map";

import { useAppData } from "../../../../../hooks";
import ICONS from "../../../../../utils/icons/json/featherIconDb.json";
import MacroDeckIcon from "../../../../../utils/icons/macroDeckIcons";

interface IntIconSelector {
  setNewIcon: React.Dispatch<React.SetStateAction<string>>;
}
const IconSelector: React.FC<IntIconSelector> = ({ setNewIcon }) => {
  const { appState, setAppState } = useAppData();
  const [filter, setFilter] = React.useState<string>("");

  React.useEffect(() => {
    setFilter("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.active.buttonPadId]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleCloseIconSelector = (icon: string | null = null) => {
    const state = _cloneDeep(appState);
    state.iconSelector.isVisible = false;
    setAppState({ ...state });
    console.log({ icon });
    icon !== null && setNewIcon(icon);
  };

  const filterIcons = (iconSet: any) => {
    const filtered = filter
      ? _filter(iconSet, (m: any) =>
          m.display.toLowerCase().includes(filter.toLowerCase())
        )
      : iconSet;

    return filtered;
  };

  return (
    <>
      <Styled.IconListWrapper>
        <Styled.IconListSearchWrapper>
          <Styled.IconListSearchField
            autoFocus={true}
            data-testid="icon-selector__search-field"
            onChange={e => handleOnchange(e)}
            placeholder="search..."
            value={filter}
          />

          <Styled.CloseButton onClick={() => handleCloseIconSelector(null)}>
            Close
          </Styled.CloseButton>
        </Styled.IconListSearchWrapper>

        <Styled.IconListWrapperScroll>
          <Styled.IconGrid>
            <Styled.IconItem
              data-testid="icon-selector__none"
              onClick={() => handleCloseIconSelector("NONE")}
            >
              None
            </Styled.IconItem>

            {_map(filterIcons(ICONS), (m: any) => (
              <Styled.IconItem
                data-testid="icon-selector__icons"
                key={m._id}
                onClick={() => handleCloseIconSelector(m.name)}
              >
                <MacroDeckIcon icon={m.name} />
              </Styled.IconItem>
            ))}
          </Styled.IconGrid>
        </Styled.IconListWrapperScroll>
      </Styled.IconListWrapper>
    </>
  );
};

export default IconSelector;
