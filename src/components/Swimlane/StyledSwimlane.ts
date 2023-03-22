import styled from 'styled-components';
import { boxShadow, greyBorder } from '../../generalStyles';

export const StyledSwimlane = styled.div`
  background: #ebecf0;
  width: 250px;
  border-radius: 4px;
  padding: 5px;
  margin: 0 3px;

  ${boxShadow}
  ${greyBorder}
`;

export const StyledSwimlaneTitle = styled.h4`
  color: #555;
  margin: 0 0 20px 0 ;
  text-transform: capitalize;
`
