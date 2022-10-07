import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.black)};
  font-size: ${({ size, theme }) => (size ? `${size}px` : theme.font.size)};
  font-weight: ${({ weight, theme }) => weight || theme.font.weight};
`;
