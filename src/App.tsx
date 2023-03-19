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
]

const App = () => {
  const [data, setData] = useState<APIPerson[]>([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(res);
    });
  }, []);

  const renderSwimlanes = () => processStages.map((swimlane, index) => <Swimlane
    title={processStages[index]}
    data={data[0]}
  ></Swimlane>
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
