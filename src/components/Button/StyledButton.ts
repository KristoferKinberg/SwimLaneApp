import styled from 'styled-components';

export enum ButtonTypes {
  ERROR = '#FF6663',
  ACCEPT = '#35CE8D',
  WARNING = '#FFB20F',
  DEFAULT = '#000'
}

interface IStyledButton {
  buttonType: ButtonTypes;
  onClick: () => any;
}

export const StyledButton = styled.button<IStyledButton>`
  align-items: center;
  background-color: #fff;
  border: 2px solid ${({ buttonType }) => buttonType};
  box-sizing: border-box;
  color: ${({ buttonType }) => buttonType};
  cursor: pointer;
  display: inline-flex;
  fill: ${({ buttonType }) => buttonType};
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none; 
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &:focus {
    color: #171e29;
  }
  
  &:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }
  
  &:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }
`;
