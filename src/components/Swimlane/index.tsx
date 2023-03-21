import { IProspect } from "../../request";
import { Card } from "../Card";
import { StyledSwimlane, StyledSwimlaneTitle } from "./StyledSwimlane";

interface IProps {
  title: string;
  prospects: IProspect[];
}

export const Swimlane = ({ title, prospects }: IProps) => {
  const renderCards = () => prospects
    ? prospects.map(prospect =>
    <Card
      prospect={prospect}
      key={prospect.id}
    />)
    : null;

  return <StyledSwimlane>
    <StyledSwimlaneTitle>
      { title }
    </StyledSwimlaneTitle>

    { renderCards() }
  </StyledSwimlane>
};
