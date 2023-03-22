import React from "react";
import { useRecoilState } from "recoil";
import {IProspect, removeProspectReq} from "../../request";
import draftProspectState from "../../state/draftProspect";
import {
  StyledCard, StyledCardBody,
  StyledCardColumn,
  StyledCardRow, StyledHireResult,
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
import useRemoveModal from "../../hooks/removeModal";

interface IProps {
  prospect: IProspect;
}

export const Card = ({ prospect }: IProps) => {
  if (!prospect) return null;

  const { setProspects } = useProspects();
  const { open } = useRemoveModal();

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: prospect,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const { updateProspect } = useEditCandidateDrawer();

  const setProspect = () => updateProspect(prospect);

  const _remove = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    removeProspectReq(prospect).then((prospects) => {
      setProspects(prospects);
    })
  }

  const _open = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    open(prospect);
  }

  const {
    picture,
    firstname,
    lastname,
    email,
    offer,
    hired
  } = prospect;

  const renderHireResult = () => typeof hired === 'number' && <StyledHireResult hired={hired}/>;

  const renderOffer = () => offer && <StyledCardRow>
    <StyledCardBody>
      <div>
        <StyledSpan bold={true}>Offered: </StyledSpan>
        <StyledSpan>{offer} kr</StyledSpan>
      </div>
      <div>
        { renderHireResult() }
      </div>
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
        <Trash2 color={'#333'} onClick={_open}/>
      </StyledRemoveWrapper>
    </StyledCardRow>

    { renderOffer() }
  </StyledCard>
};
