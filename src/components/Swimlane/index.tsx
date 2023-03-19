import { APIPerson } from "../../request";
import { Card } from "../Card";
import { StyledSwimlane, StyledSwimlaneTitle } from "./StyledSwimlane";

interface IProps {
  title: string;
  data: APIPerson;
}

export const Swimlane = ({ title, data }: IProps) => {
  return <StyledSwimlane>
    <StyledSwimlaneTitle>
      { title }
    </StyledSwimlaneTitle>
    <Card user={data}>dsada</Card>
  </StyledSwimlane>
};
