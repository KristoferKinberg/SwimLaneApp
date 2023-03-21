import { atom } from "recoil";
import { APIPerson } from "../request";

interface IDraftProspect {
  isNew: boolean;
  draftProspect: APIPerson;
}

const defaultState: IDraftProspect = {
  isNew: true,
  draftProspect: {
    id: 0,
    title: "",
    firstname: "",
    lastname: "",
    picture: "",
    email: "",
    processStage: "",
    dob: "",
    address: "",
  }
};

export default atom({
  key: 'draftProspect',
  default: defaultState,
});

export {
  defaultState
}
