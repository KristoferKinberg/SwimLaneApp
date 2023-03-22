import {IProspect, updateProspectReq} from "../../request";
import { Card } from "../Card/Card";
import { StyledSwimlane, StyledSwimlaneTitle } from "./StyledSwimlane";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../draggableItemTypes";
import {useRecoilState} from "recoil";
import prospectState, {IProspects} from "../../state/prospects";
import {processStages} from "../../constants";
import useOfferModal from "../../hooks/useOfferModal";

interface IProps {
  title: string;
  value: string;
  prospects: IProspect[];
}

export const Swimlane = ({ title, prospects, value }: IProps) => {
  const [allProspects, setProspects] = useRecoilState<IProspects>(prospectState);
  const { open } = useOfferModal();

  const onDrop = (prospect: IProspect) => {
    const updatedProspect = {
      ...prospect,
      processStage: value,
    };

    if (value === processStages.OFFER) {
      console.log('prospectState', value);
      return open(prospect);
    }

    updateProspectReq(updatedProspect)
      .then((prospects) => setProspects(prospects));
  }

  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: onDrop
  }))

  const renderCards = () => prospects
    ? prospects.map(prospect =>
    <Card
      prospect={prospect}
      key={prospect.id}
    />)
    : null;

  return <StyledSwimlane ref={drop}>
    <StyledSwimlaneTitle>
      { title }
    </StyledSwimlaneTitle>

    { renderCards() }
  </StyledSwimlane>
};
