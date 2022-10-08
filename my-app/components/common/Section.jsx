import styled from 'styled-components';

export const Section = styled.section`
  height: ${({ height }) => height || '685px'};
  background: ${({ theme }) => theme.colors.background};
`;
