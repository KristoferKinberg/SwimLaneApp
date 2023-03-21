import { atom } from "recoil";
import { APIPerson } from "../request";

export type IProspects = Record<string, APIPerson>;

export default atom({
  key: 'prospects',
  default: {}
});
