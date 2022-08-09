import React from "react";
import { PlusCircle } from "react-bootstrap-icons";
import * as Styled from "./profileButton.style";

import { useProfile } from "../../../../../hooks";

const ProfileButton: React.FC = () => {
  const { createProfile } = useProfile();

  return (
    <>
      <Styled.NewProfileButton onClick={createProfile}>
        <div>
          <PlusCircle size={16} />
        </div>
        <div>New Profile</div>
      </Styled.NewProfileButton>
    </>
  );
};

export default ProfileButton;
