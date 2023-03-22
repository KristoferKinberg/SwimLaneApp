import {atom} from "recoil";
import {defaultState} from "./draftProspect";
import {IProspect} from "../request";

interface IOfferModal {
  prospect: IProspect | null;
  active: boolean;
}

export default atom<IOfferModal>({
  key: 'offerModal',
  default: {
    prospect: null,
    active: false,
  },
});
