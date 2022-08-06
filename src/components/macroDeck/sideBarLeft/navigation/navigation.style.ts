import styled from "styled-components";

export const NavigationWrapper = styled.div``;

interface IntNavigationItem {
  active: boolean;
}

const defaultItem = styled.div`
  background-color: #32363f;
  border-top: 1px solid #42464e;
  height: 30px;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      color: #7d7f85;
    }

    :nth-child(2) {
      justify-content: left;
    }
  }
`;

export const NavigationItem = styled(defaultItem)<IntNavigationItem>`
  background-color: ${props => (props.active ? "#25334f" : "#32363f")};
  grid-template-columns: 40px auto 30px;
  > div {
    :nth-child(3) {
      color: #8498d2;
    }
  }
`;

export const NewProfileButton = styled(defaultItem)`
  grid-template-columns: 40px auto;
  border-bottom: 1px solid #42464e;
`;
