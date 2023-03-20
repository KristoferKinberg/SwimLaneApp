import { StyledButton } from "./StyledButton";

interface IProps {
  label: string;
  onClick: () => unknown;
}

const Button = ({ label, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>
    { label }
  </StyledButton>
}

export default Button;
