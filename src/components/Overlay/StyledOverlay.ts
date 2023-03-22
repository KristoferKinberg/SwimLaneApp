import styled from "styled-components";

export const StyledOverlay = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  position: fixed;

  z-index: ${({ active }: { active: boolean}) => active ? 1 : -999};
  ${({ active }: { active: boolean}) => !active && `
    transition: z-index 200ms;
    transition-delay: 200ms;
  `};
  opacity: ${({ active }: { active: boolean}) => active ? .75 : 0};
  transition: opacity .2s;
`;
