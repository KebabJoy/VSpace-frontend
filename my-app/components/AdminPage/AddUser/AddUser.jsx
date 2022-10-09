import styled from 'styled-components';
import arrowImg from '../../../assets/adminPage/arrow-right.svg';
import { Icon } from '../../common/Icon';

export const AddUser = ({ data }) => {
  return (
    <Container>
      <InfoContainer>
        <span>Добавить пользователя</span>

        <StyledInput placeholder="Имя" />
        <StyledInput placeholder="Фамилия" />

        <Switch />
        <Switch />
      </InfoContainer>

      <StyledButton>
        <Icon src={arrowImg.src}></Icon>
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  height: 69px;
  background: #ffffff;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #5865f2;
`;

const StyledInput = styled.input`
  padding: 8px 24px;
  width: 111px;
  height: 33px;
  border-bottom: 1px solid #b6c1dd;
  border-radius: 8px;
`;

const Switch = styled.div`
  padding: 8px 12px;
  width: 137px;
  height: 40px;
  border: 1px solid #b6c1dd;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #f5f3fa;
  border-radius: 100px;
`;
