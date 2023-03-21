import { atom } from "recoil";

interface IDrawer {
  editCandidateDrawer: boolean;
}

export default atom({
  key: 'drawers',
  default: {
    editCandidateDrawer: false,
  }
});
