import React from "react";
import { useRecoilState } from "recoil";
import { IProspect } from "../../request";
import draftProspectState from "../../state/draftProspect";
import { getAgeBasedOnBirthDate } from "../../utils/utils";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";
import useEditCandidateDrawer from "../../hooks/useEditCandidateDrawer";

interface IProps {
  prospect: IProspect;
}

export const Card = ({ prospect }: IProps) => {
  if (!prospect) return null;

  const { updateProspect } = useEditCandidateDrawer();

  const setProspect = () => updateProspect(prospect);

  const {
    picture,
    firstname,
    lastname,
    email,
    dob,
  } = prospect;
  const age = getAgeBasedOnBirthDate(dob)

  return <StyledCard onClick={setProspect}>
    <StyledCardRow>
      <StyledProfilePicture src={picture}/>
      <StyledCardColumn>
        <StyledName>
          { firstname } { lastname }, { age }
        </StyledName>
        <StyledSwimlaneEmail>
          { email }
        </StyledSwimlaneEmail>
      </StyledCardColumn>
    </StyledCardRow>
  </StyledCard>
};
