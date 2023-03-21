import React from "react";
import { useRecoilState } from "recoil";
import { APIPerson } from "../../request";
import draftProspectState from "../../state/draftProspect";
import { getAgeBasedOnBirthDate } from "../../utils/calcultaAge";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";

interface IProps {
  prospect: APIPerson;
  onClick: () => any;
}

export const Card = ({ prospect, onClick }: IProps) => {
  if (!prospect) return null;
  const [draftProspect, updateDraftProspect] = useRecoilState(draftProspectState);

  console.log(draftProspect);
  const setProspect = () => {
    onClick();
    updateDraftProspect({
      isNew: false,
      draftProspect: prospect
    });
  }

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
