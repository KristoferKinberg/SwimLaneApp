import { StyledOverlay } from "./StyledOverlay";

interface IProps {
  active: boolean;
  close: () => unknown;
}

const Overlay = ({ close, active }: IProps) =>
  <StyledOverlay onClick={close} active={active} />

export default Overlay;
