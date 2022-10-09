import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import { Section } from '../../common/Section';
import { Container, InfoBox, InfoP, InfoTitle, StyledBox } from './styles';

export const HowItSection = () => {
  return (
    <Section background="#fff">
      <MediaContainer>
        <Container>
          <StyledBox width="360px" height="500px" />

          <InfoBox>
            <div>
              <InfoTitle>
                Место, где вы можете найти новых друзей и подбодрить уже знакомых коллег
              </InfoTitle>
              <InfoP>
                Ищите коллег, знакомьтесь и узнавайте их интересы. Учиться, отдыхать и работать
                намного интереснее вместе!
              </InfoP>
            </div>

            <Button width={200}>Начать изучение сейчас</Button>
          </InfoBox>
        </Container>
      </MediaContainer>
    </Section>
  );
};
