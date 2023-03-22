import {useRecoilState} from "recoil";
import offerModalState from "../state/offerModal";
import {IProspect, updateProspectReq} from "../request";
import useProspects from "./useProspects";
import {processStages} from "../constants";

const useOfferModal = () => {
  const [{ prospect, active }, updateOfferModal] = useRecoilState(offerModalState);
  const { prospects, saveProspect } = useProspects();

  const open = (prospect: IProspect) => updateOfferModal({
    prospect,
    active: true,
  });

  const close = () => updateOfferModal({
    prospect: null,
    active: false,
  });

  const save = (offer: number) => {
    if (!prospect) throw new Error('No prospect defined');

    const updatedProspect = {
      ...prospect,
      offer,
      processStage: processStages.OFFER
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

export default useOfferModal;
