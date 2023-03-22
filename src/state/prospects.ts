import { atom } from "recoil";
import { IProspect } from "../request";

export type IProspects = Record<number, IProspect>;

export default atom<IProspects>({
  key: 'prospects',
  default: {}
});
