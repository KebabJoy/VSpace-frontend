import styled from 'styled-components';

export const Section = styled.section`
  height: ${({ height }) => height || '685px'};
  background: ${({ background, theme }) => background || theme.colors.background};
`;
