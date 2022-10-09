import styled from 'styled-components';
import discordImg from '../../../assets/socials/discord.svg';
import telegramImg from '../../../assets/socials/telegram.svg';
import twitchImg from '../../../assets/socials/twitch.svg';
import twitterImg from '../../../assets/socials/twitter.svg';
import youtubeImg from '../../../assets/socials/youtube.svg';
import { Icon } from '../../common/Icon';

export const SociaLinks = () => {
  return (
    <Container>
      <Icon src={discordImg.src} alt="discord"></Icon>
      <Icon src={telegramImg.src} alt="telegram"></Icon>
      <Icon src={twitchImg.src} alt="twitch"></Icon>
      <Icon src={twitterImg.src} alt="twitter"></Icon>
      <Icon src={youtubeImg.src} alt="youtube"></Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
