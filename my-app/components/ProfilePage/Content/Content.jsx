import { MediaContainer } from '../../common/MediaContainer';
import {
  BalanceTitle,
  BalanceWrapper,
  Container,
  RangExperience,
  RangExpretienceTitle,
  RangLevelCercle,
  RangLevelCercleContainer,
  RangLevelCercleText,
  RangRole,
  RangTitle,
  RangTitleContainer,
  UserBalance,
  UserBio,
  UserBioTitle,
  UserCard,
  UserImage,
  UserImageContainer,
  UserLevel,
  UserName,
  UserRangCard,
  UserRole,
} from './style';
import walletImg from '../../../assets/menuBar/wallet_black.svg';
import roubleImg from '../../../assets/profilePage/rouble.svg';
import maticImg from '../../../assets/profilePage/matic.svg';
import cercleImg from '../../../assets/profilePage/cercle.svg';
import starImg from '../../../assets/profilePage/star.svg';
import { css } from 'styled-components';

export const Content = ({ title }) => {
  return (
    <MediaContainer>
      <Container>
        <UserRangCard>
          <RangTitleContainer>
            <img src={starImg.src}></img>
            <RangTitle>Ранг</RangTitle>
          </RangTitleContainer>

          <RangRole>Знаток</RangRole>

          <RangLevelCercleContainer>
            <RangLevelCercle src={cercleImg.src} alt="circle"></RangLevelCercle>
            <RangLevelCercleText>5</RangLevelCercleText>
          </RangLevelCercleContainer>

          <RangExperience>124/360</RangExperience>
          <RangExpretienceTitle>опыт</RangExpretienceTitle>
        </UserRangCard>

        <UserCard>
          <UserImageContainer>
            <UserImage></UserImage>
            <div>
              <UserName>Name</UserName>
              <UserLevel>5 уровень</UserLevel>
            </div>
          </UserImageContainer>

          <UserRole>role</UserRole>

          <UserBioTitle>Био</UserBioTitle>

          <UserBio>
            Обожаю рыбалку с шашлычком под запах дымка, где-нибудь у озерца. Недавно отмечал день
            огурца. Играю на баяне и аккордеоне. Слушаю группу The Beatles
          </UserBio>
        </UserCard>

        <UserBalance>
          <BalanceTitle>
            <img src={walletImg.src} alt={'wallet'}></img>
            <span>Баланс</span>
          </BalanceTitle>

          <BalanceWrapper>
            <span>24</span>
            <img src={maticImg.src} alt={'matic'}></img>
          </BalanceWrapper>

          <BalanceWrapper>
            <span>1204</span>
            <img src={roubleImg.src} alt={'rouble'}></img>
          </BalanceWrapper>
        </UserBalance>
      </Container>
    </MediaContainer>
  );
};
