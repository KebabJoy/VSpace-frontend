import backgroundImg from '../../../assets/mainPage/background3.svg';
import { MediaContainer } from '../../common/MediaContainer';
import { Container, StyledP, Title } from './styles';

export const MainSection = () => {
  return (
    <Container background={backgroundImg.src}>
      <MediaContainer>
        <Title>Представьте себе...</Title>

        <StyledP>
          …место, где будет комфортно себя чувствовать любая компания: бухгалтеров, банкиров,
          программистов, дизайнеров, менеджеров. Место, где можно замутить приколдес.
        </StyledP>
      </MediaContainer>
    </Container>
  );
};
