import styled from 'styled-components';
import { boxShadow, greyBorder } from '../../generalStyles';

export const StyledCard = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
  
  ${({ isDragging }: { isDragging: boolean }) => isDragging && 'opacity: 0;'}
  
  ${boxShadow}
  ${greyBorder}
`;

export const StyledCardRow = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const StyledCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledProfilePicture = styled.img`
  border-radius: 50%;
  height: 40px;

  ${greyBorder}
`;

export const StyledName = styled.h5`
  color: #333;
  margin: 0 0 0 10px;
`;

export const StyledSwimlaneEmail = styled.span`
  color: #777;
  font-size: .8rem;
  margin: 0 0 0 10px;
`;

export const StyledRemoveWrapper = styled.div`
  height: 100%;
  display: flex;
  margin-left: 10px;
  width: 15px;
`;
