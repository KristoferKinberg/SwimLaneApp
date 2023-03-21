import React from "react";
import { useRecoilState } from "recoil";
import {IProspect, removeProspectReq} from "../../request";
import draftProspectState from "../../state/draftProspect";
import { StyledCard, StyledCardColumn, StyledCardRow, StyledName, StyledProfilePicture, StyledSwimlaneEmail } from "./StyledCard";
import useEditCandidateDrawer from "../../hooks/useEditCandidateDrawer";
import {ItemTypes} from "../../draggableItemTypes";
import {useDrag} from "react-dnd";
import { Trash2 } from 'react-feather';
import useProspects from "../../hooks/useProspects";

interface IProps {
  prospect: IProspect;
}

export const Card = ({ prospect }: IProps) => {
  if (!prospect) return null;

  const { setProspects } = useProspects();

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: prospect,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const { updateProspect } = useEditCandidateDrawer();

  const setProspect = () => updateProspect(prospect);

  const remove = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    removeProspectReq(prospect).then((prospects) => {
      setProspects(prospects);
    })
  }

  const {
    picture,
    firstname,
    lastname,
    email,
  } = prospect;

  return <StyledCard onClick={setProspect} ref={drag} isDragging={isDragging}>
    <StyledCardRow>
      <StyledProfilePicture src={picture}/>
      <StyledCardColumn>
        <StyledCardRow>
          <StyledName>
            { firstname } { lastname }
          </StyledName>
          <StyledSwimlaneEmail>
            <Trash2 color={'#333'} size={13} onClick={remove}/>
          </StyledSwimlaneEmail>
        </StyledCardRow>
        <StyledSwimlaneEmail>
          { email }
        </StyledSwimlaneEmail>
      </StyledCardColumn>
    </StyledCardRow>
  </StyledCard>
};
