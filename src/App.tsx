import {useEffect, useState} from "react";
import {IProspect, fetchProducts} from "./request";
import { StyledApp, StyledHeader, StyledSwimlaneContainer } from "./StyledApp";
import './index.css';
import { Swimlane } from "./components/Swimlane";
import Button from "./components/Button";
import Drawer from "./components/Drawer";
import {Input, Select} from "./components/Input/index";
import { processStages } from "./constants";
import { stages } from "./Views/stages";
import EditCandidateDrawer from "./Views/Start/EditCandidateDrawer";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import draftProspectState, { defaultState } from './state/draftProspect';
import prospectsState, { IProspects } from './state/prospects';
import useDraftProspect from "./hooks/useDraftProspect";
import useEditCandidateDrawer from "./hooks/useEditCandidateDrawer";
import useProspects from "./hooks/useProspects";

interface ICandidatesObject {
  [key: string]: IProspect;
}

const App = () => {
  const { draftProspect, isNew, setProspect } = useDraftProspect();
  const { prospects, setProspects } = useProspects();
  const { createProspect } = useEditCandidateDrawer();

  const processStagesArray = Object.keys(processStages);

  const objectifyData = (data: IProspect[]) => data.reduce((canditates, candidate) => ({
    ...canditates,
    [candidate.id]: candidate
  }), {});

  useEffect(() => {
    fetchProducts().then((res) => {
      setProspects(objectifyData(res));
      console.log(res);
    });
  }, []);

  const sortedData = Object.values(prospects)
    ? Object.values(prospects).reduce<{ [key: string]: IProspect[] }>((acc, curr) => {
    return {
      ...acc,
      [curr.processStage]: [
        ...(acc[curr.processStage] ? acc[curr.processStage] : []),
        curr
      ]
    };
  }, {})
  : null;

  const renderSwimLanes = () => Object.keys(processStages).map((swimlane, index) => {
    if (!sortedData) return null;

    return <Swimlane
      key={stages[index].value}
      title={stages[index].label}
      prospects={sortedData[stages[index].value]}
    />
    }
  );

  return (
    <StyledApp>
      <EditCandidateDrawer />

      <StyledHeader>
        <h1>Crowd Collective Candites</h1>

        <Button label={'Add candidate'} onClick={createProspect} />
      </StyledHeader>

      <StyledSwimlaneContainer>
        { renderSwimLanes() }
      </StyledSwimlaneContainer>
    </StyledApp>
  )
}

export default App
