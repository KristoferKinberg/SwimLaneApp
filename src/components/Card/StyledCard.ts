import styled from 'styled-components';
import { boxShadow, greyBorder } from '../../generalStyles';

export const StyledCard = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  
  ${boxShadow}
  ${greyBorder}
`;

export const StyledCardRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledCardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProfilePicture = styled.img`
  border-radius: 50%;
  width: 40px;
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
