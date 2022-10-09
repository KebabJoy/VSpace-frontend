import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import { Section } from '../../common/Section';
import { Container, InfoBox, InfoP, InfoTitle, StyledBox } from './styles';

export const ActivitySection = () => {
  return (
    <Section background="#fff">
      <MediaContainer>
        <Container>
          <StyledBox width="360px" height="500px" />

          <InfoBox>
            <div>
              <InfoTitle>Предстоящие активности</InfoTitle>
              <InfoP>Узнавайте заранее о всех активностях.</InfoP>
            </div>

            <Button width={280}>Посмотреть предстояшие активности</Button>
          </InfoBox>
        </Container>
      </MediaContainer>
    </Section>
  );
};
