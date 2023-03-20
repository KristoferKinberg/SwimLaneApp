import { APIPerson } from "../../request";
import { Card } from "../Card";
import { StyledSwimlane, StyledSwimlaneTitle } from "./StyledSwimlane";

interface IProps {
  title: string;
  prospects: APIPerson[];
}

export const Swimlane = ({ title, prospects }: IProps) => {
  if (!prospects) return null;

  const renderCards = () =>
    prospects.map(prospect => <Card prospect={prospect} key={prospect.id} />)

  return <StyledSwimlane>
    <StyledSwimlaneTitle>
      { title }
    </StyledSwimlaneTitle>

    { renderCards() }
  </StyledSwimlane>
};
