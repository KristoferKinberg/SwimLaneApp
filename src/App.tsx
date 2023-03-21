import {useEffect, useState} from "react";
import {IProspect, fetchProducts} from "./request";
import {
  StyledApp,
  StyledHeader,
  StyledInputIconWrapper,
  StyledInputWrapper,
  StyledSwimlaneContainer,
  StyledTitle
} from "./StyledApp";
import './index.css';
import { Swimlane } from "./components/Swimlane";
import Button from "./components/Button";
import Drawer from "./components/Drawer";
import { processStages } from "./constants";
import { stages } from "./Views/stages";
import EditCandidateDrawer from "./Views/Start/EditCandidateDrawer";
import draftProspectState, { defaultState } from './state/draftProspect';
import prospectsState, { IProspects } from './state/prospects';
import useDraftProspect from "./hooks/useDraftProspect";
import useEditCandidateDrawer from "./hooks/useEditCandidateDrawer";
import useProspects from "./hooks/useProspects";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Input} from "./components/Input";
import { Search } from 'react-feather';

interface ICandidatesObject {
  [key: string]: IProspect;
}

const App = () => {
  const { draftProspect, isNew, setProspect } = useDraftProspect();
  const { prospects, setProspects } = useProspects();
  const { createProspect } = useEditCandidateDrawer();
  const [searchStr, setSearchStr] = useState('');

  const processStagesArray = Object.keys(processStages);

  const objectifyData = (data: IProspect[]) => data.reduce((canditates, candidate) => ({
    ...canditates,
    [candidate.id]: candidate
  }), {});

  useEffect(() => {
    fetchProducts().then((res) => {
      setProspects(objectifyData(res));
    });
  }, []);

  const applySearch = () => Object.values(prospects).filter(prospect => {
    const { id, picture, ...rest } = prospect;
    console.log(Object.values(rest).join('/'))
    return Object.values(rest).join('/').includes(searchStr);
  });

  const searchedData = searchStr.length
    ? objectifyData(applySearch())
    : prospects;

  const swimlanePreppedData = Object.values(prospects)
    ? Object.values(searchedData).reduce<{ [key: string]: IProspect[] }>((acc, curr) => {
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
    if (!swimlanePreppedData) return null;
    const { value, label } = stages[index];

    return <Swimlane
      key={value}
      value={value}
      title={label}
      prospects={swimlanePreppedData[value]}
    />
    }
  );

  return (
    <StyledApp>
      <EditCandidateDrawer />

      <StyledHeader>
        <StyledTitle>Crowd Collective Candidates</StyledTitle>
        <StyledInputWrapper>
          <StyledInputIconWrapper>
            <Search color={'#333'}/>
          </StyledInputIconWrapper>
          <Input value={searchStr} onChange={setSearchStr} overrideStyles="border: 2px solid #333"/>
        </StyledInputWrapper>
        <Button label={'Add candidate'} onClick={createProspect} />
      </StyledHeader>

      <DndProvider backend={HTML5Backend}>
        <StyledSwimlaneContainer>
          { renderSwimLanes() }
        </StyledSwimlaneContainer>
      </DndProvider>
    </StyledApp>
  )
}

export default App
