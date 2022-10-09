import { Container, Image, ImageEmpty, Number, Score, Username } from './styles';
import appleImg from '../../assets/apple.svg';
import styled from 'styled-components';
import { createRef, useState } from 'react';
import arrowImg from '../../assets/adminPage/arrow-right.svg';
import { Icon } from '../common/Icon';

export const UserPreview = ({ number, img, username, score, callback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = createRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCallback = () => {
    callback(inputRef?.current?.value || 0);
  };

  return (
    <Container>
      {number && <Number>{number}</Number>}

      {img ? <Image src={img} alt={username + 'avatar'} /> : <ImageEmpty />}

      <Username>{username}</Username>

      <Score>{score}</Score>

      {callback && (
        <CallbackContainer>
          <img src={appleImg.src} onClick={handleClick}></img>

          {isOpen && (
            <Popup>
              <Currency>{`₽`}</Currency>

              <StyledInput type="number" ref={inputRef} autoFocus placeholder="50" />

              <StyledButton onClick={handleCallback}>
                <Icon src={arrowImg.src}></Icon>
              </StyledButton>
            </Popup>
          )}
        </CallbackContainer>
      )}
    </Container>
  );
};

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

const Currency = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #b6c1dd;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 33px;
  border: 1px solid #b6c1dd;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  all: unset;
  width: 59px;
  height: 31px;
  border-bottom: 1px solid #b6c1dd;
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #0a2896;
`;

const CallbackContainer = styled.div`
  position: relative;
`;

const Popup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 18px;
  gap: 12px;

  position: absolute;
  width: 198px;
  height: 68px;

  background: #ffffff;
  border: 1px solid #b6c1dd;
  border-radius: 8px;
  z-index: 1;
  transform: translateX(calc(-50% + 12px));
`;
