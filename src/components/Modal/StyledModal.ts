import styled from 'styled-components';

export interface IStyledModal {
  width: number;
  height: number;
  active: boolean;
}

const padding = 20;

export const StyledModal = styled.div<IStyledModal>`
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 20%;
  margin-left: -${({ width }) => width / 2 + padding / 2}px;
  width: ${({ width }) => width }px;
  height: ${({ height }) => height}px;
  border-radius: 6px;
  padding: ${padding}px;
  display: flex;

  z-index: ${({ active }: { active: boolean}) => active ? 1 : -999};
  ${({ active }: { active: boolean}) => !active && `
    transition: z-index 200ms;
    transition-delay: 200ms;
  `};
`;

export const StyledOfferModalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StyledOfferModalContent = styled.div`
  flex: 1;
`;

export const StyledOfferModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
