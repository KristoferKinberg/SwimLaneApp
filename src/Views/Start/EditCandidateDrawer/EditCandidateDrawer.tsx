import React from "react";
import Drawer from "../../../components/Drawer/Drawer";
import { Input, Select } from "../../../components/Input/Input";
import { stages } from "../../stages";
import Button from "../../../components/Button/Button";
import useDraftProspect from "../../../hooks/useDraftProspect";
import useEditCandidateDrawer from "../../../hooks/useEditCandidateDrawer";
import {CREATE, PROSPECT, SAVE, UPDATE} from "../../../constants";

const EditCandidateDrawer = () => {
  const { draftProspect, isNew, updateProspect } = useDraftProspect();
  const { visible, cancel, save } = useEditCandidateDrawer()

  const _updateDraftProspect = (key: string) => (value: string) => {
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
        onChange={_updateDraftProspect(key)}
        // @ts-ignore
        value={draftProspect[key]}
      />
    </>
  }

  const renderButton = () => isNew
    ? <Button label={CREATE} onClick={save} />
    : <Button label={SAVE} onClick={save} />

  const getTitle = () => isNew
    ? `${CREATE} ${PROSPECT}`
    : `${UPDATE} ${PROSPECT}`;

  return <Drawer active={visible} close={cancel} footer={renderButton()} title={getTitle()}>
    <>
      { renderInput('Firstname', 'firstname') }
      { renderInput('Lastname', 'lastname') }
      { renderInput('Email', 'email') }
      { renderInput('Address', 'address') }
      { draftProspect.offer && renderInput('Offer', 'offer') }

      <Select
        label='Stage'
        onChange={_updateDraftProspect('processStage')}
        selected={draftProspect.processStage}
        options={stages}
      />
    </>
  </Drawer>
}

export default EditCandidateDrawer;
