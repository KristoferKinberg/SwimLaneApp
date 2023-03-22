import styled from 'styled-components';
import { boxShadow, greyBorder } from '../../generalStyles';
import exp from "constants";

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

export const StyledCardBody = styled.div`
  margin-top: 10px;
  flex: 1;
  background-color: #f5f5f5;
  padding: 5px;
  border: 1px solid #cecece;
`;

export const StyledSpan = styled.span<{ bold?: boolean}>`
  font-size: .8rem;
  ${({ bold }) => bold && 'font-weight: 600;'}
`;
