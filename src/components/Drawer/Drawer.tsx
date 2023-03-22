import Button from "../Button/Button";
import {
  StyledDrawer,
  StyledDrawerContainer,
  StyledOverlay,
  StyledDrawerHeader,
  StyledDrawerBody,
  StyledDrawerFooter,
  StyledCloseButton, StyledDrawerTitle
} from "./StyledDrawer";
import {X} from "react-feather";
import Overlay from "../Overlay/Overlay";

interface IProps {
  active: boolean;
  children: JSX.Element;
  footer: JSX.Element;
  close: () => unknown;
  title?: string;
}

const Drawer = ({ active, children, footer, close, title = '' }: IProps) => {
  return <StyledDrawerContainer active={active}>
    <Overlay close={close} active={active} />
    <StyledDrawer active={active}>
      <StyledDrawerHeader>
        <StyledCloseButton>
          <X onClick={close} />
        </StyledCloseButton>

        <StyledDrawerTitle>
          { title }
        </StyledDrawerTitle>
      </StyledDrawerHeader>

      <StyledDrawerBody>
        { children }
      </StyledDrawerBody>

      <StyledDrawerFooter>
        {footer}
      </StyledDrawerFooter>
    </StyledDrawer>


  </StyledDrawerContainer>
};

export default Drawer;
