import {useEffect, useState} from "react";
import {APIPerson, fetchProducts} from "./request";
import { StyledApp, StyledSwimlaneContainer } from "./StyledApp";
import './index.css';
import { Swimlane } from "./components/Swimlane";

const processStages = [
  "contact",
  "dialog",
  "interview",
  "offer",
  "finished"
];

const App = () => {
  const [data, setData] = useState<APIPerson[]>([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(res);
    });
  }, []);


  const sortedData = data.length
    ? data.reduce<{ [key: string]: APIPerson[] }>((acc, curr) => {
    return {
      ...acc,
      [curr.processStage]: [
        ...(acc[curr.processStage] ? acc[curr.processStage] : []),
        curr
      ]
    };
  }, {})
  : null;

  const renderSwimlanes = () => processStages.map((swimlane, index) => {
    if (!sortedData) return null;

    return <Swimlane
        title={processStages[index]}
        prospects={sortedData[processStages[index]]}
      ></Swimlane>
    }
  );

  return (
    <StyledApp>
      <StyledSwimlaneContainer>
        { renderSwimlanes() }
      </StyledSwimlaneContainer>
    </StyledApp>
  )
}

export default App
