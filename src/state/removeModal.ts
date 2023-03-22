import {atom} from "recoil";
import {IProspect} from "../request";

interface RemoveModal {
  prospect: IProspect | null;
  active: boolean;
}

export default atom<RemoveModal>({
  key: 'removeModal',
  default: {
    prospect: null,
    active: false,
  },
});
