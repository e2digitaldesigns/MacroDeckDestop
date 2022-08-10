import styled from "styled-components";

interface IntMdIcon {
  color?: string;
}

export const MdIcon = styled.span<IntMdIcon>`
  font-family: "Bebas Neue";
  font-size: 36px;
  color: ${props => props.color && props.color};
`;
