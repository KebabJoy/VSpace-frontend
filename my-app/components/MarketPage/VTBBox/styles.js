import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 360px;
  margin-bottom: 140px;
`;

export const Info = styled.div`
  padding: 36px 48px 48px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.s};
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 44px;
  line-height: 53px;
`;

export const StyledP = styled.p`
  margin: 0;
  margin-bottom: 62px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const ImageContainer = styled.div`
  flex: 1 0 360px;
  width: 360px;
  height: 100%;
  padding: 18px;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.s};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Image = styled.img``;

export const EmptyImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.xs};
  background-color: ${(props) => props.theme.colors.background};
`;
