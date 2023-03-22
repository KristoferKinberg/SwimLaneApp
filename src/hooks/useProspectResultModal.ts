import {useRecoilState} from "recoil";
import offerModalState from "../state/offerModal";
import {IProspect, updateProspectReq} from "../request";
import useProspects from "./useProspects";
import {processStages} from "../constants";
import prospectResultModal from "../state/prospectResultModal";

const useProspectResultModal = () => {
  const [{ prospect, active }, updateProspectResultModal] = useRecoilState(prospectResultModal);
  const { prospects, saveProspect } = useProspects();

  const open = (prospect: IProspect) => updateProspectResultModal({
    prospect,
    active: true,
  });

  const close = () => updateProspectResultModal({
    prospect: null,
    active: false,
  });

  const save = (didAccept: number) => {
    if (!prospect) throw new Error('No prospect defined');

    const updatedProspect: IProspect = {
      ...prospect,
      processStage: processStages.FINISHED,
      hired: didAccept,
    };

    updateProspectReq(updatedProspect).then(() => {
      saveProspect(updatedProspect);
      close();
    });
  }

  return {
    open,
    close,
    save,
    active,
    prospect,
  }
};

export default useProspectResultModal;
