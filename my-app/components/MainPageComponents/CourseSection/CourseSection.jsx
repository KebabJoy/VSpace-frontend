import { MediaContainer } from '../../common/MediaContainer';
import { Section } from '../../common/Section';
import { Container, InfoBox, InfoP, InfoTitle } from './styles';

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
            <button>Начать изучение сейчас</button>
          </InfoBox>

          <div></div>
        </Container>
      </MediaContainer>
    </Section>
  );
};
