import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.xs};
`;
