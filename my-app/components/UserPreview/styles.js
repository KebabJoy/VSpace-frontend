import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 6px;
  border-radius: ${(props) => props.theme.borderRadius.xs};
  background-color: ${(props) => props.theme.colors.background};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const Number = styled.span`
  color: ${(props) => props.theme.colors.secondaryInverse};
  margin-right: 6px;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  // border-radius: ${(props) => props.theme.borderRadius.l};
`;

export const ImageEmpty = styled.div`
  width: 24px;
  height: 24px;
  background: #d9d9d9;
  border-radius: 4px;
  // border-radius: ${(props) => props.theme.borderRadius.l};
  // background: ${(props) => (!props.src ? props.theme.colors.background : null)};
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;
