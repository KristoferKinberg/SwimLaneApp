import styled from 'styled-components';

export const StyledDrawerContainer = styled.div`
  z-index: ${({ active }: { active: boolean}) => active ? 1 : -999};
  ${({ active }: { active: boolean}) => !active && `
    transition: z-index 200ms;
    transition-delay: 200ms;
  `};

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const StyledCloseButton = styled.span`
  cursor: pointer;
`;

export const StyledDrawer = styled.div`
  background: #f4f4f4;
  height: 100%;
  max-width: 300px;
  width: 90%;
  position: absolute;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  right: ${({ active }: { active: boolean}) => active ? 0 : '-300px'};
  transition: right .2s;
  z-index: 1;
`;

export const StyledDrawerHeader = styled.div`
  height: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const StyledDrawerTitle = styled.h3`
  text-transform: capitalize;
  font-weight: 900;
  margin: 0;
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
