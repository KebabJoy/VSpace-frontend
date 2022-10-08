import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.white};
  flex-grow: 2;
  max-width: 650px;
`;

export const StyledA = styled.a`
  // color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.secondaryInverse};
  cursor: pointer;
`;

export const LinkItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.white};
`;
