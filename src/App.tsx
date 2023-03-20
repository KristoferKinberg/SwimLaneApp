import {useEffect, useState} from "react";
import {APIPerson, fetchProducts} from "./request";
import { StyledApp, StyledHeader, StyledSwimlaneContainer } from "./StyledApp";
import './index.css';
import { Swimlane } from "./components/Swimlane";
import Button from "./components/Button";
import Drawer from "./components/Drawer";
import Input from "./components/Input";

interface ICandidatesObject {
  [key: string]: APIPerson;
}

const processStages = [
  "contact",
  "dialog",
  "interview",
  "offer",
  "finished"
];

const draftUserValues = {
  first: '',
  last: '',
  age: ''
};

const App = () => {
  const [data, setData] = useState<ICandidatesObject>({});
  const [drawerActive, setDrawerActive] = useState<boolean>(false);
  const [draftUser, setDraftUser] = useState<typeof draftUserValues | null>(null);

  const _setDrawerActive = (drawerState: boolean) => () => {
    setDraftUser(draftUserValues);
    setDrawerActive(drawerState);
  }

  const objectifyData = (data: APIPerson[]) => data.reduce((canditates, candidate) => ({
    ...canditates,
    [candidate.id]: candidate
  }), {});

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(objectifyData(res));
      console.log(res);
    });
  }, []);

  const sortedData = Object.values(data)
    ? Object.values(data).reduce<{ [key: string]: APIPerson[] }>((acc, curr) => {
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
      key={processStages[index]}
      title={processStages[index]}
      prospects={sortedData[processStages[index]]}
    ></Swimlane>
    }
  );

  const updateDraftUser = (key: string) => (value: string) => {
    if (!draftUser) return;

    setDraftUser({
      ...draftUser,
      [key]: value
    })
  };

  const renderInput = (label: string, key: string) => {
    if (!draftUser) return null;

    return <>
      <Input
        label={label}
        onChange={updateDraftUser(key)}
        // @ts-ignore
        value={draftUser[key]}
      />
    </>
  }

  return (
    <StyledApp>
      <Drawer active={drawerActive} onClose={_setDrawerActive(false)}>
        <>
          { renderInput('Firstname', 'first') }
          { renderInput('Lastname', 'last') }
          { renderInput('Age', 'age') }
          { renderInput('Address', 'adress') }
        </>
      </Drawer>

      <StyledHeader>
        <h1>Crowd Collective Candites</h1>

        <Button label={'Add candidate'} onClick={_setDrawerActive(true)} />
      </StyledHeader>

      <StyledSwimlaneContainer>
        { renderSwimlanes() }
      </StyledSwimlaneContainer>
    </StyledApp>
  )
}

export default App
