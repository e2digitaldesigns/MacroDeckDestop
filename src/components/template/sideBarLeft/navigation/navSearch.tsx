import React from "react";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import * as Styled from "./navSearch.style";

const NavigationSearch: React.FC = () => {
  return (
    <Styled.SearchWrapper>
      <Styled.SearchStats>
        <ArrowLeftCircleFill />
        <div>
          Viewing <Styled.SearchStatsCount>9/9</Styled.SearchStatsCount>
        </div>

        <Styled.SearchShowAll>Show All</Styled.SearchShowAll>
      </Styled.SearchStats>

      <div>
        <Styled.SearchBox />
      </div>
    </Styled.SearchWrapper>
  );
};

export default NavigationSearch;
