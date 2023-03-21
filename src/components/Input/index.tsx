import Select from "./Select";
import {StyledInput, StyledInputWrapper, StyledLabel } from "./StyledInput";
import React from "react";

interface IProps {
  onChange: (value: string) => any;
  value: any;
  label?: string;
  type?: string;
  overrideStyles: string
}

const Input = ({ label, onChange, value, type = "text", overrideStyles = '' }: IProps) => {
  const _onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => onChange(value);

  if (!label) return <StyledInput type={type} value={value} onChange={_onChange} overrideStyles={overrideStyles}/>;

  return <StyledInputWrapper>
    <StyledLabel htmlFor="">{label}</StyledLabel>
    <StyledInput type={type} value={value} onChange={_onChange} overrideStyles={overrideStyles}/>
  </StyledInputWrapper>
};

export {
  Input,
  Select,
};
