import { Button } from '../../common/Button';
import { MediaContainer } from '../../common/MediaContainer';
import { EmptyImage, Image, ImageContainer, Info, StyledP, Title, Container } from './styles';

const img = null;

export const VTBBox = () => {
  return (
    <MediaContainer>
      <Container>
        <Info>
          <Title>
            Покупайте и открывайте <br></br>VTBbox
          </Title>
          <StyledP>Контейнеры с уникальными призами, вещами с маркета и NFT</StyledP>
          <Button fontWeight={700} fontSize={'24px'} lineHeight={'29px'}>
            Купить за 10м
          </Button>
        </Info>

        <ImageContainer>{img ? <Image src={img} /> : <EmptyImage />}</ImageContainer>
      </Container>
    </MediaContainer>
  );
};
