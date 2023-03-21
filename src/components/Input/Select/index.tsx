import { StyledInputWrapper, StyledLabel } from "../StyledInput";
import { StyledSelect } from "./StyledSelect";

type IOption = {
  value: string;
  label: string;
}

interface IProps {
  label: string;
  onChange: (value: string) => any;
  selected: string;
  options: IOption[];
}

const Select = ({ label, onChange, selected, options }: IProps) => {
  const _onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => onChange(value);

  const renderRadioButtons = () =>
    options.map(({ value, label }) => <option value={value}>{label}</option>);

  return <StyledInputWrapper>
    <StyledLabel htmlFor="">{label}</StyledLabel>
    <StyledSelect>
      { renderRadioButtons() }
    </StyledSelect>
  </StyledInputWrapper>
};

export default Select;
