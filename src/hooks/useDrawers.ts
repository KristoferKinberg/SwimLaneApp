import { useRecoilState } from "recoil";
import drawersState from '../state/drawers';

const useDrawer = () => {
  const [drawers, updateDrawers] = useRecoilState(drawersState);

  const setDrawerState = (key: string, value: boolean) => updateDrawers({
    ...drawers,
    [key]: value
  });

  // @ts-ignore
  const isActive = (key: string) => drawers[key];

  return {
    setDrawerState,
    isActive,
  }
};

export default useDrawer;
