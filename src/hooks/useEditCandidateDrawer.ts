import {useRecoilState} from "recoil";
import showEditCandidateDrawerState from '../state/showEditCandidateDrawer'
import useDraftProspect from "./useDraftProspect";
import { defaultState } from '../state/draftProspect';
import {IProspect, updateProspectReq, createProspectReq} from "../request";
import useProspects from "./useProspects";

const useEditCandidateDrawer = () => {
  const { draftProspect, setProspect, isNew } = useDraftProspect();
  const { saveProspect } = useProspects();
  const [editCandidateDrawer, showEditCandidateDrawer] = useRecoilState(showEditCandidateDrawerState);

  const show = () => showEditCandidateDrawer(true);

  const hide = () => showEditCandidateDrawer(false);

  const createProspect = () => {
    setProspect(true, defaultState.draftProspect);
    show();
  };

  const updateProspect = (prospect: IProspect) => {
    setProspect(false, prospect);
    show();
  }

  const cancel = () => {
    setProspect(true, defaultState.draftProspect);
    hide();
  }

  const getSaveOrUpdate = () => isNew
    ? createProspectReq
    : updateProspectReq;

  const save = () => {
    getSaveOrUpdate()(draftProspect)
      .then(() => {
        saveProspect(draftProspect);
        hide();
      });
  }

  return {
    visible: editCandidateDrawer,
    cancel,
    createProspect,
    updateProspect,
    save,
  }
};

export default useEditCandidateDrawer;
