import { useRecoilState } from "recoil";
import { IProspect } from "../request";
import draftProspectState, { defaultState } from '../state/draftProspect';

const useDraftProspect = () => {
  const [{ draftProspect, isNew }, updateDraftProspect] = useRecoilState(draftProspectState);

  const updateProspect = (draft: any) => updateDraftProspect({
    draftProspect: draft,
    isNew,
  });

  const setProspect = (newProspect: boolean, prospect: IProspect) => updateDraftProspect({
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
