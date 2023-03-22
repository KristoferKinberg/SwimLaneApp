import {ButtonTypes, StyledButton} from "./StyledButton";

interface IProps {
  label: string;
  onClick: () => any;
  buttonType?: ButtonTypes;
}

const Button = ({ label, onClick, buttonType = ButtonTypes.DEFAULT }: IProps) => {
  return <StyledButton onClick={onClick} buttonType={buttonType}>
    { label }
  </StyledButton>
}

export default Button;
