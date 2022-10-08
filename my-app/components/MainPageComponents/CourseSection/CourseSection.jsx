import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import { Section } from '../../common/Section';
import { Container, InfoBox, InfoP, InfoTitle, StyledBox } from './styles';

export const CourseSection = () => {
  return (
    <Section>
      <MediaContainer>
        <Container>
          <InfoBox>
            <div>
              <InfoTitle>Место, где можно развивать профессиональные навыки</InfoTitle>
              <InfoP>Подберите себе курс по душе</InfoP>
            </div>

            <Button width={200}>Начать изучение сейчас</Button>
          </InfoBox>

          <StyledBox width="360px" height="500px" background="#fff" />
        </Container>
      </MediaContainer>
    </Section>
  );
};
