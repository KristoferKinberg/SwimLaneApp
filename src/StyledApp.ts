import styled from 'styled-components';

export const StyledApp = styled.div`
  background-color: #e1dfd7;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-height: 100vh;
`;

export const StyledSwimlaneContainer = styled.div`
  margin: 0 -5px;
  display: flex;
  overflow-y: auto;
  padding: 0 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
