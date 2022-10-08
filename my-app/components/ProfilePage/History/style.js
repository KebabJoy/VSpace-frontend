import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.m};
  min-height: 184px;
  margin-bottom: 48px;

  color: ${(props) => props.theme.colors.secondaryInverse};
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
`;
