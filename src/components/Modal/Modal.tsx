import Overlay from "../Overlay/Overlay";
import {IStyledModal, StyledModal} from "./StyledModal";

interface IProps {
  active: boolean;
  close: () => unknown;
  content: JSX.Element;
  width?: number;
  height?: number;
}

const Modal = ({ close, active, content, width = 350, height = 300 }: IProps) => {
  return <>
    <Overlay close={close} active={active}/>
    <StyledModal width={width} height={height} active={active}>
      { content }
    </StyledModal>
  </>;
};

export default Modal;
