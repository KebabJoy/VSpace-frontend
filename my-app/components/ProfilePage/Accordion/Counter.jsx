import styled from 'styled-components';

export const Counter = ({ count }) => {
  return <Container>{count}</Container>;
};

const Container = styled.div`
  width: 72px;
  height: 36px;
  padding: 6px 24px;
  background: #f5f3fa;
  border-radius: 30px;

  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #5865f2;
`;
