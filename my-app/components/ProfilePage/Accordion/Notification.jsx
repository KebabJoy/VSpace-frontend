import styled from 'styled-components';
import bellRingImg from '../../../assets/profilePage/bell-ring.svg';

export const Notification = ({ count }) => {
  return (
    <Container>
      <span>{count}</span>
      <img src={bellRingImg.src} alt={'bell ring'}></img>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 8px 12px;
  min-width: 69px;
  height: 40px;
  background: #f5f3fa;
  border-radius: 30px;

  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #b6c1dd;
`;
