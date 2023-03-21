import Select from "./Select";
import {StyledInput, StyledInputWrapper, StyledLabel } from "./StyledInput";

interface IProps {
  label: string;
  onChange: (value: string) => any;
  value: any;
  type?: string;
}

const Input = ({ label, onChange, value, type = "text" }: IProps) => {
  const _onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => onChange(value);

  return <StyledInputWrapper>
    <StyledLabel htmlFor="">{label}</StyledLabel>
    <StyledInput type={type} value={value} onChange={_onChange}/>
  </StyledInputWrapper>
};

export {
  Input,
  Select,
};
