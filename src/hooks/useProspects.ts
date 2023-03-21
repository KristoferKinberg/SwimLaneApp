import {useRecoilState} from "recoil";
import prospectState, {IProspects} from "../state/prospects";
import {IProspect} from "../request";

const useProspects = () => {
  const [prospects, setProspects] = useRecoilState<IProspects>(prospectState);

  const saveProspect = (prospect: IProspect) => {
    setProspects({
      ...prospects,
      [prospect.id]: prospect
    })
  };

  return {
    prospects,
    saveProspect,
    setProspects,
  }
};

export default useProspects;
