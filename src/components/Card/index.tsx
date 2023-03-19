import { APIPerson } from "../../request";
import {  } from "../Swimlane/StyledSwimlane";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";

interface IProps {
  prospect: APIPerson;
}

export const Card = ({ prospect }: IProps) => {
  if (!prospect) return null;

  const { picture, name, dob, email } = prospect;

  return <StyledCard>
    <StyledCardRow>
      <StyledProfilePicture src={picture.thumbnail}/>
      <StyledCardColumn>
        <StyledName>
          { name.first } { name.last }, { dob.age }
        </StyledName>
        <StyledSwimlaneEmail>
          { email }
        </StyledSwimlaneEmail>
      </StyledCardColumn>
    </StyledCardRow>
  </StyledCard>
};
