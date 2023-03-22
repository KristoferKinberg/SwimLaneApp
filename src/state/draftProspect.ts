import { atom } from "recoil";
import { IProspect } from "../request";

interface IDraftProspect {
  isNew: boolean;
  draftProspect: IProspect;
}

const defaultState = {
  isNew: true,
  draftProspect: {
    id: 0,
    title: "",
    firstname: "",
    lastname: "",
    picture: "",
    email: "",
    processStage: "",
    address: "",
  }
};

export default atom<IDraftProspect>({
  key: 'draftProspect',
  default: defaultState,
});

export {
  defaultState
}
