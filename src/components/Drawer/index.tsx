import Button from "../Button";
import { StyledDrawer, StyledDrawerContainer, StyledOverlay, StyledCloseButton, StyledDrawerHeader, StyledDrawerBody, StyledDrawerFooter} from "./StyledDrawer";

interface IProps {
  active: boolean;
  children: JSX.Element;
  footer: JSX.Element;
  onClose: () => any;
}

const Drawer = ({ active, children, footer, onClose }: IProps) => {
  if (!active) return null;

  return <StyledDrawerContainer>
    <StyledOverlay onClick={onClose} />
    <StyledDrawer>
      <StyledDrawerHeader>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
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
