import { StyledInputWrapper, StyledLabel } from "../StyledInput";
import { StyledSelect } from "./StyledSelect";
import React from "react";

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
  const _onChange = ({ target: { value }}: React.ChangeEvent<HTMLSelectElement>) => onChange(value);

  const renderOptions = () =>
    options.map(({ value, label }) => <option key={value} value={value}>{label}</option>);

  return <StyledInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledSelect value={selected} onChange={_onChange}>
      { renderOptions() }
    </StyledSelect>
  </StyledInputWrapper>
};

export default Select;
