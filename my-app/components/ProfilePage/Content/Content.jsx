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

export const Content = ({ user }) => {
  return (
    <MediaContainer>
      <Container>
        <UserRangCard>
          <RangTitleContainer>
            <img src={starImg.src} alt="star"></img>
            <RangTitle>Ранг</RangTitle>
          </RangTitleContainer>

          <RangRole>{user.rank}</RangRole>

          <RangLevelCercleContainer>
            <RangLevelCercle src={cercleImg.src} alt="circle"></RangLevelCercle>
            <RangLevelCercleText>{user.rank_number}</RangLevelCercleText>
          </RangLevelCercleContainer>

          <RangExperience>
            {user.experience}/{(user.rank_number + 1) * 50}
          </RangExperience>
          <RangExpretienceTitle>опыт</RangExpretienceTitle>
        </UserRangCard>

        <UserCard>
          <UserImageContainer>
            <UserImage></UserImage>
            <div>
              <UserName>
                {user.first_name} {user.last_name}
              </UserName>
              <UserLevel>{user.rank_number} уровень</UserLevel>
            </div>
          </UserImageContainer>

          <UserRole>{user.position}</UserRole>

          <UserBioTitle>Био</UserBioTitle>

          <UserBio>{user.bio}</UserBio>
        </UserCard>

        <UserBalance>
          <BalanceTitle>
            <img src={walletImg.src} alt={'wallet'}></img>
            <span>Баланс</span>
          </BalanceTitle>

          <BalanceWrapper>
            <span>{user.matics}</span>
            <img src={maticImg.src} alt={'matic'}></img>
          </BalanceWrapper>

          <BalanceWrapper>
            <span>{user.rubles}</span>
            <img src={roubleImg.src} alt={'rouble'}></img>
          </BalanceWrapper>
        </UserBalance>
      </Container>
    </MediaContainer>
  );
};
