import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ background, theme }) => background || theme.colors.background};
  width: ${({ width, theme }) => width || null};
  height: ${({ height, theme }) => height || null};
`;
