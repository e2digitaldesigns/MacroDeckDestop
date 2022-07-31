import styled from "styled-components";

export const NavigationWrapper = styled.div`
  height: 300px;
`;

interface IntNavigationItem {
  active: boolean;
}

export const NavigationItem = styled.div<IntNavigationItem>`
  height: 30px;
  background-color: ${props => (props.active ? "#111" : "#32363f")};
  border-top: 1px solid #42464e;

  display: grid;
  grid-template-columns: 40px auto 30px;
  grid-column-gap: 0.125rem;

  cursor: pointer;

  > div {
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      color: #7d7f85;
    }

    :nth-child(2) {
      justify-content: left;
    }

    :nth-child(3) {
      color: #8498d2;
    }
  }
`;
