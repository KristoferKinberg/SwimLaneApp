import {useEffect, useState} from "react";
import {APIPerson, fetchProducts} from "./request";
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
import useDrawer from "./hooks/useDrawers";

interface ICandidatesObject {
  [key: string]: APIPerson;
}

const App = () => {
  //const [drawerActive, setDrawerActive] = useState<boolean>(false);
  const { draftProspect, isNew, setProspect } = useDraftProspect();
  const [prospects, setProspects] = useRecoilState<IProspects>(prospectsState);
  const { isActive, setDrawerState } = useDrawer();
  const candidateEditorDrawerActive = isActive('editCandidateDrawer');

  const processStagesArray = Object.keys(processStages);

  const objectifyData = (data: APIPerson[]) => data.reduce((canditates, candidate) => ({
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
    ? Object.values(prospects).reduce<{ [key: string]: APIPerson[] }>((acc, curr) => {
    return {
      ...acc,
      [curr.processStage]: [
        ...(acc[curr.processStage] ? acc[curr.processStage] : []),
        curr
      ]
    };
  }, {})
  : null;

  const renderSwimlanes = () => Object.keys(processStages).map((swimlane, index) => {
    if (!sortedData) return null;

    return <Swimlane
      key={stages[index].value}
      title={stages[index].label}
      prospects={sortedData[stages[index].value]}
      onClick={editCandidate}
    ></Swimlane>
    }
  );

  const editCandidate = (user: APIPerson) => () => {
    setDrawerState('editCandidateDrawer', true);
  }

  const createCandidate = () => {
    setDrawerState('editCandidateDrawer', true);
    setProspect(true, defaultState.draftProspect);
  }

  return (
    <StyledApp>
      <EditCandidateDrawer active={candidateEditorDrawerActive} close={() => setDrawerActive(false)} />

      <StyledHeader>
        <h1>Crowd Collective Candites</h1>

        <Button label={'Add candidate'} onClick={createCandidate} />
      </StyledHeader>

      <StyledSwimlaneContainer>
        { renderSwimlanes() }
      </StyledSwimlaneContainer>
    </StyledApp>
  )
}

export default App
