import { Container, Image, ImageEmpty, Number, Username } from './styles';

export const UserPreview = ({ number, img, username }) => {
  return (
    <Container>
      <Number>{number}</Number>

      {img ? <Image src={img} alt={username + 'avatar'} /> : <ImageEmpty />}

      <Username>{username}</Username>
    </Container>
  );
};
