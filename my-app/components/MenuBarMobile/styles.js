import styled from 'styled-components';
import { Text } from '../common/Text';

export const TextLink = styled(Text)`
  cursor: pointer;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  background-color: ${({ primary, theme }) => (primary ? theme.colors.background : null)};
  width: ${({ isShown }) => (isShown ? '189px' : null)};
  cursor: pointer;
  transition: all 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  gap: 24px;
  width: min-content;
`;
