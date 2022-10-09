import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.secondaryInverse};
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

export const CardContainer = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 18px 36px;
  // border: 1px solid ${(props) => props.theme.colors.secondaryInverse};
  // border-radius: ${(props) => props.theme.borderRadius.s};
  min-height: 400px;

  background: #ffffff;
  border: 1px solid #b6c1dd;
  border-radius: 14px;
`;

export const CardTitle = styled.div`
  padding: 12px 24px;
  height: 48px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  color: ${(props) => props.theme.colors.white};
`;
