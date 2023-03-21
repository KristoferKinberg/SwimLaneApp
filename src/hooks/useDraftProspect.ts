import { useRecoilState } from "recoil";
import { APIPerson } from "../request";
import draftProspectState, { defaultState } from '../state/draftProspect';

const useDraftProspect = () => {
  const [{ draftProspect, isNew }, updateDraftProspect] = useRecoilState(draftProspectState);

  const updateProspect = (draft: any) => updateDraftProspect({
    draftProspect: draft,
    isNew,
  });

  const setProspect = (newProspect: boolean, prospect: APIPerson) => updateDraftProspect({
    draftProspect: prospect,
    isNew: newProspect,
  });

  const cancel = () => updateDraftProspect(defaultState);

  return {
    draftProspect,
    isNew,
    updateProspect,
    setProspect,
    cancel
  }
};

export default useDraftProspect;
