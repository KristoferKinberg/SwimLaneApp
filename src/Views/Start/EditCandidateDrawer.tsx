import React from "react";
import Drawer from "../../components/Drawer";
import { Input, Select } from "../../components/Input";
import { stages } from "../stages";
import draftProspectState from '../../state/draftProspect'
import { useRecoilState } from "recoil";
import Button from "../../components/Button";
import prospectsState, { IProspects } from "../../state/prospects";
import useDraftProspect from "../../hooks/useDraftProspect";

interface IProps {
  active: boolean;
  close: () => any;
}

const EditCandidateDrawer = ({ active, close }: IProps) => {
  const { draftProspect, isNew, updateProspect } = useDraftProspect();
  const [prospects, setProspects] = useRecoilState<IProspects>(prospectsState);

  const _updateDraftUser = (key: string) => (value: string) => {
    if (!draftProspect) return;

    updateProspect({
      ...draftProspect,
      [key]: value
    });
  };

  const renderInput = (label: string, key: string) => {
    if (!draftProspect) return null;

    return <>
      <Input
        label={label}
        onChange={_updateDraftUser(key)}
        // @ts-ignore
        value={draftProspect[key]}
      />
    </>
  }

  const saveUser = () => {
    setProspects({
      ...prospects,
      [draftProspect.id]: draftProspect,
    });
  }

  const renderButton = () => isNew
    ? <Button label={'Create'} onClick={saveUser} />
    : <Button label={'Save'} onClick={saveUser} />


  return <Drawer active={active} onClose={close} footer={renderButton()}>
    <>
      { renderInput('Firstname', 'firstname') }
      { renderInput('Lastname', 'lastname') }
      { renderInput('Age', 'age') }
      { renderInput('Email', 'email') }
      { renderInput('Address', 'address') }

      <Select
        label='Stage'
        onChange={_updateDraftUser('stage')}
        selected={draftProspect.processStage}
        options={stages}
      />
    </>
  </Drawer>
}

export default EditCandidateDrawer;
