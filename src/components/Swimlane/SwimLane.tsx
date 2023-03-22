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

  const swimLaneProgression = Object
    .values(processStages)
    .reduce<{[key: string]: string}>((succObj, stage, index, arr) => ({
      ...succObj,
      [stage]: index - 1 !== arr.length
        ? arr[index + 1]
        : ''
    }), {});

  const disallowedLaneDrop = (prospect: IProspect) => swimLaneProgression[prospect.processStage] !== value

  const onDrop = (prospect: IProspect) => {
    if (disallowedLaneDrop(prospect)) return;

    const updatedProspect = {
      ...prospect,
      processStage: value,
    };

    if (value === processStages.OFFER)
      return open(prospect);

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
