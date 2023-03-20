import styled from 'styled-components';

export const StyledDrawerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const StyledOverlay = styled.div`
  background: #000;
  opacity: .75;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const StyledCloseButton = styled.span`
  font-weight: bolder;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const StyledDrawer = styled.div`
  background: #fff;
  height: 100%;
  max-width: 300px;
  width: 90%;
  position: absolute;
  right: 0;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

export const StyledDrawerHeader = styled.div`
  height: 40px;
  padding: 20px;
`;

export const StyledDrawerBody = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
`;

export const StyledDrawerFooter = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;
