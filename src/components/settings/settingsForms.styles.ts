import styled from "styled-components";
import { ScrollerDiv } from "../../styles/scrollDiv.style";
import * as FormStyles from "../../styles/form.styles";

export const FormWrapper = styled.div`
  /* padding: 0 0.5rem; */
  margin: 0.5rem;
  /* border: 0.5rem solid #222; */
  background-color: #222;
  height: calc(
    100vh -
      (
        (
            ${props => props.theme.modules.subHeader.position.top} +
              ${props => props.theme.modules.footer.sizes.height}
          ) + 1rem
      )
  );
`;

export const FormScrollWrapper = styled(ScrollerDiv)`
  height: 100%;
`;

export const Section = styled.div`
  padding: 0.5rem;
  /* margin-bottom: 0.5rem; */
  background-color: #272a31;
`;

export const Section2 = styled(Section)`
  margin-top: 0.5rem;
`;

export const SectionHeader = styled.h4`
  padding: 0.5rem 0 0.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 0.0625rem solid #555;
`;

export const FieldSet = styled.div`
  font-size: 0.875rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.25rem;
  margin: 0.25rem 0;
  > label {
    margin-bottom: 0.25rem;
  }
`;

export const SubmitButton = styled(FormStyles.SubmitButton)`
  width: 8rem;
  margin: 0.25rem 0;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.submitButton.bg.normal};
`;

const FormFieldDefaults = styled.input`
  height: 2rem;
  background-color: #1e1f22 !important;
  border: 0.125rem solid #55565a;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.875rem;
  outline: none;
  padding: 0.5rem 0.5rem;

  &:focus {
    color: #fff;
  }
`;

export const TextField = styled(FormFieldDefaults)``;
