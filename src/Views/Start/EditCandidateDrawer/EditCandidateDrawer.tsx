import React from "react";
import Drawer from "../../../components/Drawer/Drawer";
import { Input, Select } from "../../../components/Input/Input";
import { stages } from "../../stages";
import Button from "../../../components/Button/Button";
import useDraftProspect from "../../../hooks/useDraftProspect";
import useEditCandidateDrawer from "../../../hooks/useEditCandidateDrawer";
import {CREATE, PROSPECT, UPDATE} from "../../../constants";

const EditCandidateDrawer = () => {
  const { draftProspect, isNew, updateProspect } = useDraftProspect();
  const { visible, cancel, save } = useEditCandidateDrawer()

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

  const renderButton = () => isNew
    ? <Button label={'Create'} onClick={save} />
    : <Button label={'Save'} onClick={save} />

  const getTitle = () => isNew
    ? `${CREATE} ${PROSPECT}`
    : `${UPDATE} ${PROSPECT}`;

  return <Drawer active={visible} close={cancel} footer={renderButton()} title={getTitle()}>
    <>
      { renderInput('Firstname', 'firstname') }
      { renderInput('Lastname', 'lastname') }
      { renderInput('Email', 'email') }
      { renderInput('Address', 'address') }

      <Select
        label='Stage'
        onChange={_updateDraftUser('processStage')}
        selected={draftProspect.processStage}
        options={stages}
      />
    </>
  </Drawer>
}

export default EditCandidateDrawer;
