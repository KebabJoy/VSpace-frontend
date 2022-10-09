import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 96px;
`;

export const Title = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.secondaryInverse};
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 36px 48px;
  width: 360px;
  min-height: 200px;
  border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  border-radius: ${(props) => props.theme.borderRadius.s};

  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.secondaryInverse};
`;
