import Button from "../Button";
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

interface IProps {
  active: boolean;
  children: JSX.Element;
  footer: JSX.Element;
  onClose: () => any;
  title?: string;
}

const Drawer = ({ active, children, footer, onClose, title = '' }: IProps) => {
  //if (!active) return null;

  return <StyledDrawerContainer active={active}>
    <StyledOverlay onClick={onClose} active={active}/>
    <StyledDrawer active={active}>
      <StyledDrawerHeader>
        <StyledCloseButton>
          <X onClick={onClose} />
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
