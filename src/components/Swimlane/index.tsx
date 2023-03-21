import { APIPerson } from "../../request";
import { Card } from "../Card";
import { StyledSwimlane, StyledSwimlaneTitle } from "./StyledSwimlane";

interface IProps {
  title: string;
  prospects: APIPerson[];
  onClick: (candidate: APIPerson) => () => any
}

export const Swimlane = ({ title, prospects, onClick }: IProps) => {
  const renderCards = () => prospects
    ? prospects.map(prospect =>
    <Card
      prospect={prospect}
      key={prospect.id}
      onClick={onClick(prospect)}
    />)
    : null;

  return <StyledSwimlane>
    <StyledSwimlaneTitle>
      { title }
    </StyledSwimlaneTitle>

    { renderCards() }
  </StyledSwimlane>
};
