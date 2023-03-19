import { APIPerson } from "../../request";
import {  } from "../Swimlane/StyledSwimlane";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";

interface IProps {
  user: APIPerson;
}

export const Card = ({ user }: IProps) => {
  if (!user) return null;

  const { picture, name, dob, email } = user;

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
