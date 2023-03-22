import {atom} from "recoil";
import {defaultState} from "./draftProspect";
import {IProspect} from "../request";

interface IProspectResultModal {
  prospect: IProspect | null;
  active: boolean;
}

export default atom<IProspectResultModal>({
  key: 'ProspectResultModal',
  default: {
    prospect: null,
    active: false,
  },
});
