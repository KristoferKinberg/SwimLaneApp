import React from "react";
import { useRecoilState } from "recoil";
import {IProspect, removeProspectReq} from "../../request";
import draftProspectState from "../../state/draftProspect";
import {
  StyledCard, StyledCardBody,
  StyledCardColumn,
  StyledCardRow,
  StyledName,
  StyledProfilePicture,
  StyledRemoveWrapper, StyledSpan,
  StyledSwimlaneEmail
} from "./StyledCard";
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
    offer
  } = prospect;

  const renderOffer = () => offer && <StyledCardRow>
    <StyledCardBody>
      <StyledSpan bold={true}>Salary offered: </StyledSpan>
      <StyledSpan>{offer} kr</StyledSpan>
    </StyledCardBody>
  </StyledCardRow>

  return <StyledCard onClick={setProspect} ref={drag} isDragging={isDragging}>
    <StyledCardRow>
      <StyledProfilePicture src={picture}/>
      <div style={{ display: 'flex', flex: 1, overflow: "hidden" }}>
        <StyledCardColumn>
          <StyledName>
            { firstname } { lastname }
          </StyledName>
          <StyledSwimlaneEmail>
            { email }
          </StyledSwimlaneEmail>
        </StyledCardColumn>
      </div>
      <StyledRemoveWrapper>
        <Trash2 color={'#333'} onClick={remove}/>
      </StyledRemoveWrapper>
    </StyledCardRow>

    { renderOffer() }
  </StyledCard>
};
