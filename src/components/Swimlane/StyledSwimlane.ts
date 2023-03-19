import styled from 'styled-components';
import { boxShadow, greyBorder } from '../../generalStyles';

export const StyledSwimlane = styled.div`
  background: #ebecf0;
  border-radius: 4px;
  padding: 20px;
  margin: 0 3px;

  ${boxShadow}
  ${greyBorder}
`;

export const StyledSwimlaneTitle = styled.h4`
  color: #666;
  margin: 0 0 20px 0 ;
  text-transform: capitalize;
`
