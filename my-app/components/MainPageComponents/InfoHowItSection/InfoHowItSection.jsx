import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import { Section } from '../../common/Section';
import { Container, InfoBox, InfoP, InfoTitle, StyledBox } from './styles';
import nftImg from '../../../assets/mainPage/nft.svg';
import roubleImg from '../../../assets/mainPage/rouble.svg';
import maticImg from '../../../assets/mainPage/matic.svg';
import styled from 'styled-components';

export const InfoHowItSection = () => {
  return (
    <Section>
      <MediaContainer>
        <Container>
          <InfoBox>
            <div>
              <InfoTitle>Как это работает?</InfoTitle>
              <InfoP style={{ marginBottom: '24px' }}>
                За активности вы получаете монеты, которые в конце месяца начисляются вам на
                кошелек.
              </InfoP>

              <StyledDiv>
                <img src={nftImg.src}></img>
                <InfoP>
                  Получите NFT за выполнение особых заданий, посещение ивентов или в награду за
                  хорошую работу
                </InfoP>
              </StyledDiv>

              <StyledDiv>
                <img src={maticImg.src}></img>
                <InfoP>
                  Получите монету MATIC за прохждение курсов и от других пользователей, посещение
                  ивентов или в награду за хорошую работу
                </InfoP>
              </StyledDiv>

              <StyledDiv>
                <img src={roubleImg.src}></img>
                <InfoP>
                  Получите крипто рубли за прохждение курсов или от других пользователей
                </InfoP>
              </StyledDiv>
            </div>

            <Button width={220}>Получить монеты впервые</Button>
          </InfoBox>

          <StyledBox width="360px" height="500px" background="#fff" />
        </Container>
      </MediaContainer>
    </Section>
  );
};

export const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 72px;
`;
