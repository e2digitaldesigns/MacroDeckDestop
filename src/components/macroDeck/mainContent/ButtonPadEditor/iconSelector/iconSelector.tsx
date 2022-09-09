import React from "react";
import * as Styled from "./iconSelector.styles";
import * as RFIcon from "react-feather";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _map from "lodash/map";

import { useAppData } from "../../../../../hooks";

// import Iconic from "../../../../../../../utils/icons/icons";

import ICONS from "../../../../../utils/icons/json/featherIconDb.json";
import MacroDeckIcon from "../../../../../utils/icons/macroDeckIcons";

// interface IntIconSelectorProps {
//   handleSelectIcon: (icon: string) => void;
//   isVisible: boolean;
// }

interface IntIconSelectorProps {
  handleSelectIcon: any;
}

const IconSelector: React.FC<IntIconSelectorProps> = ({ handleSelectIcon }) => {
  const { appState, setAppState } = useAppData();
  const [filter, setFilter] = React.useState<string>("");

  React.useEffect(() => {
    setFilter("");
    handleCloseIconSelector();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.active.buttonPadId]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleCloseIconSelector = (icon: string | null = null) => {
    const state = _cloneDeep(appState);
    state.iconSelector.isVisible = false;
    setAppState({ ...state });

    icon !== null && handleSelectIcon(icon);
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
        </Styled.IconListSearchWrapper>

        <Styled.IconListWrapperScroll>
          <Styled.IconGrid>
            <Styled.IconItem
              data-testid="icon-selector__none"
              onClick={() => handleCloseIconSelector("")}
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
