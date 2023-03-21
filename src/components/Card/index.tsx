import React from "react";
import { useRecoilState } from "recoil";
import { IProspect } from "../../request";
import draftProspectState from "../../state/draftProspect";
import { getAgeBasedOnBirthDate } from "../../utils/utils";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";
import useEditCandidateDrawer from "../../hooks/useEditCandidateDrawer";
import {ItemTypes} from "../../draggableItemTypes";
import {useDrag} from "react-dnd";

interface IProps {
  prospect: IProspect;
}

export const Card = ({ prospect }: IProps) => {
  if (!prospect) return null;

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: prospect,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

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

  return <StyledCard onClick={setProspect} ref={drag} isDragging={isDragging}>
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
