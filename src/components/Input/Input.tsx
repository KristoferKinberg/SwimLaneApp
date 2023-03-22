import Select from "./Select/Select";
import {StyledInput, StyledInputWrapper, StyledLabel } from "./StyledInput";
import React from "react";

interface IProps {
  onChange: (value: string) => any;
  value: any;
  label?: string;
  type?: string;
  overrideStyles?: string;
  placeholder?: string;
}

const Input = ({ label, onChange, value, type = "text", overrideStyles = '', placeholder = '' }: IProps) => {
  const _onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => onChange(value);
  const renderInput = () => <StyledInput
    type={type}
    value={value}
    onChange={_onChange}
    overrideStyles={overrideStyles}
    placeholder={placeholder}
  />;

  if (!label) return renderInput();

  return <StyledInputWrapper>
    <StyledLabel htmlFor="">{label}</StyledLabel>
    { renderInput() }
  </StyledInputWrapper>
};

export {
  Input,
  Select,
};
