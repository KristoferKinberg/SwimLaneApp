import {useRecoilState} from "recoil";
import {IProspect, removeProspectReq} from "../request";
import useProspects from "./useProspects";
import removeModal from "../state/removeModal";

const useRemoveModal = () => {
  const [{ prospect, active }, updateOfferModal] = useRecoilState(removeModal);
  const { setProspects } = useProspects();

  const open = (prospect: IProspect) => updateOfferModal({
    prospect,
    active: true,
  });

  const close = () => updateOfferModal({
    prospect: null,
    active: false,
  });

  const remove = () => {
    if (!prospect) throw new Error('No prospect defined');

    removeProspectReq(prospect).then((prospects) => {
      setProspects(prospects);
      close();
    });
  }

  return {
    open,
    close,
    remove,
    active,
    prospect,
  }
};

export default useRemoveModal;
